import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { InViewportDirective } from 'ng-in-viewport';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), InViewportDirective],
  exports: [RouterModule, InViewportDirective]
})
export class HomePageRoutingModule {}
