import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { StoreComponent } from './pages/store/store.component';
import { CartComponent } from './pages/cart/cart.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { ProductGalleryComponent } from './shared/components/product-gallery/product-gallery.component';
import { CartProductsListComponent } from './shared/components/cart-products-list/cart-products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    StoreComponent,
    CartComponent,
    FilterComponent,
    ProductGalleryComponent,
    CartProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
