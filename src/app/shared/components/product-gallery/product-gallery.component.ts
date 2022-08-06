import { Component, Input, OnInit } from '@angular/core';
import { ActionFigureProduct } from 'src/app/models/action-figure';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.css']
})
export class ProductGalleryComponent implements OnInit {
  @Input() productList: Array<ActionFigureProduct> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
