import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoteComponent } from './pages/adote/adote.component';
import { NossasRegrasComponent } from './pages/nossas-regras/nossas-regras.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'adote', component: AdoteComponent },
  { path: 'nossas-regras', component: NossasRegrasComponent },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
