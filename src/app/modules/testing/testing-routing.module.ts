import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixSectionComponent } from './six-section/six-section.component';

const routes: Routes = [{ path: '6', component: SixSectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingRoutingModule {}
