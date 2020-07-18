import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '/' },
    // { path:'**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
export const RoutingComponent = [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    // PagenotfoundComponent,
]