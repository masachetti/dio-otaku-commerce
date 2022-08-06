import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { NpnSliderModule } from 'npn-slider';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    StoreComponent,
    CartComponent,
    FilterComponent,
    ProductGalleryComponent,
    CartProductsListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    FormsModule,
    NpnSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
