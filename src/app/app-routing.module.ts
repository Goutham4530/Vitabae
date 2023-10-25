import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { JoincommunityComponent } from './joincommunity/joincommunity.component';
import { MedicalcommunityComponent } from './medicalcommunity/medicalcommunity.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent }, 
  { path: 'contact', component: ContactComponent, }, 
  { path: 'products', component: ProductsComponent, }, 
  { path: 'joincommunity', component: JoincommunityComponent, },
  { path: 'medicalcommunity', component: MedicalcommunityComponent, },  
  { path: 'suppliers', component: SuppliersComponent, }, 
  { path: 'research', component: ResearchComponent, },   
  
]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
