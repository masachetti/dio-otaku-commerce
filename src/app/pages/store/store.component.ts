import { Component, OnInit } from '@angular/core';
import { ActionFigureProduct } from 'src/app/models/action-figure';
import { Filter } from 'src/app/models/filter';
import { CartService } from 'src/app/services/cart.service';
import { StockApiService } from 'src/app/services/stock-api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  productList: Array<ActionFigureProduct> = [];
  filteredProductList: Array<ActionFigureProduct> = [];
  animeList: string[] = [];
  maxPrice: number = 1000;

  constructor(
    private stockApiService: StockApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.stockApiService
      .retrieveAll()
      .subscribe((productList) => this.updateProductList(productList));
  }

  updateProductList(productList: Array<ActionFigureProduct>) {
    this.productList = productList;
    this.filteredProductList = productList;
    this.animeList = [...new Set(productList.map((p) => p.animeName))];
    this.maxPrice = Math.max(...productList.map((p) => p.price));
  }

  onFilterChange(filter: Filter) {
    let tempProductList = this.productList;
    if (filter.selectedAnimes.length > 0) {
      tempProductList = tempProductList.filter((product) => {
        return filter.selectedAnimes.indexOf(product.animeName) >= 0;
      });
    }

    tempProductList = tempProductList.filter((product) => {
      return (
        product.price >= filter.priceRange[0] &&
        product.price <= filter.priceRange[1]
      );
    });

    tempProductList = tempProductList.filter((product) => {
      if (product.quantity > 0) return true;
      return filter.outOfStock;
    });

    this.filteredProductList = tempProductList;
  }

  addToCart(product: ActionFigureProduct) {
    this.cartService.addProduct(product);
  }
}
