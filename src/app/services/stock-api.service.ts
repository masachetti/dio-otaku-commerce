import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ActionFigureProduct } from '../models/action-figure';

@Injectable({
  providedIn: 'root',
})
export class StockApiService {
  apiUrl = 'https://sheet.best/api/sheets/9c814ea4-eb59-4fea-ae4c-dd34a53cc69c';

  constructor(private httpClient: HttpClient) {}

  retrieveAll(): Observable<Array<ActionFigureProduct>> {
    return of(API_RESPONSE);
    // return this.httpClient.get<Array<ActionFigureProduct>>(this.apiUrl);
  }

  retrieveByProductId(productId: number): Observable<ActionFigureProduct|undefined>{
    return of(API_RESPONSE.find((p) => p.id === productId));
  }
}

const API_RESPONSE: Array<ActionFigureProduct> = [
  {
    id: 1,
    productName: 'Shikamaru Action Figure',
    animeName: 'Naruto',
    price: 31.99,
    quantity: 5,
    imageURL:
      'https://narutoshippuden.store/wp-content/uploads/2021/07/hde3b637da044401cb5bcaaa0e5af6ff1q.jpg',
  },
  {
    id: 2,
    productName: 'Hatake Kakashi Action Figure',
    animeName: 'Naruto',
    price: 44.99,
    quantity: 2,
    imageURL:
      'https://narutoshippuden.store/wp-content/uploads/2021/07/product-image-1615362395.jpg',
  },
  {
    id: 3,
    productName: 'Tobi Action Figure',
    animeName: 'Naruto',
    price: 41.99,
    quantity: 0,
    imageURL:
      'https://naruto-universe.com/wp-content/uploads/2022/05/Tobi-Action-Figure-7-850x850.jpg',
  },
  {
    id: 4,
    productName: 'Ressurection Ulquiorra Action Figure',
    animeName: 'Bleach',
    price: 200.0,
    quantity: 2,
    imageURL:
      'https://bbts1.azureedge.net/images/p/full/2021/08/8d13789e-5730-444d-b8be-3bb5dd3e17cc.jpg',
  },
  {
    id: 5,
    productName: 'Sukuna Action Figure',
    animeName: 'Jujutsu Kaisen',
    price: 150.8,
    quantity: 3,
    imageURL: 'https://m.media-amazon.com/images/I/61bKVDGSQLL._AC_SL1200_.jpg',
  },
  {
    id: 6,
    productName: 'Gojo Satoru Action Figure',
    animeName: 'Jujutsu Kaisen',
    price: 100.99,
    quantity: 0,
    imageURL:
      'https://jujutsukaisenmerch.com/wp-content/uploads/2022/03/H3afa7a8dfcf540218b72007db5d7cf83C.jpg',
  },
];
