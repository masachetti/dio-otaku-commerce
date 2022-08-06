import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ListItem } from 'ng-multiselect-dropdown/multiselect.model';
import { Filter } from 'src/app/models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<Filter>;

  @Input() maxprice: number = 200;
  @Input() animeList: string[] = [];

  dropdownSettings: IDropdownSettings = {};
  selectedItems: any[] = [];
  filterPriceRange: number[] = [0, Infinity];
  priceRangeSteps = 3;
  _priceSliderFactor = 1;
  _filter: Filter = {
    selectedAnimes: [],
    priceRange: [0, 200],
    outOfStock: false
  }


  constructor() {}

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter: true,
    };
    this._priceSliderFactor = this.maxprice/(100-this.priceRangeSteps);
  }

  calcPriceFromSliderValue(sliderValue:number){
    if (sliderValue>100-this.priceRangeSteps) return Infinity
    let retValue = sliderValue*this._priceSliderFactor;
    return retValue
  }
  onRangeChange(rangeValues: number[]){
    this.filterPriceRange = rangeValues.map((n)=>this.calcPriceFromSliderValue(n));
    this._filter.priceRange = this.filterPriceRange
    this.filterChange.emit(this._filter);

  }
  onSelect(item: ListItem){
    let animeName = "" + item;
    this._filter.selectedAnimes.push(animeName);
    this.filterChange.emit(this._filter);

  }
  onDeSelect(item: ListItem){
    let animeName = "" + item;
    this._filter.selectedAnimes = this._filter.selectedAnimes.filter(_=>_!==animeName);
    this.filterChange.emit(this._filter);
  }

  onCheckBoxChange(checkBoxElement: HTMLInputElement){
    console.log(checkBoxElement.checked)
    this._filter.outOfStock = checkBoxElement.checked;
    this.filterChange.emit(this._filter);
  }
}
