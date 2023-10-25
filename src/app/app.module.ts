import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResearchComponent } from './research/research.component';
import { ProductsComponent } from './products/products.component';
import { JoincommunityComponent } from './joincommunity/joincommunity.component';
import { MedicalcommunityComponent } from './medicalcommunity/medicalcommunity.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResearchComponent,
    ProductsComponent,
    JoincommunityComponent,
    MedicalcommunityComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
