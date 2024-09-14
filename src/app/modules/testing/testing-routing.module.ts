import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixSectionComponent } from './six-section/six-section.component';
import { SevenSectionComponent } from './seven-section/seven-section.component';

const routes: Routes = [
  { path: '6', component: SixSectionComponent },
  { path: '7', component: SevenSectionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestingRoutingModule {}
