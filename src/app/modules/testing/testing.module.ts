import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingRoutingModule } from './testing-routing.module';
import { SixSectionComponent } from './six-section/six-section.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SixSectionComponent],
  imports: [CommonModule, TestingRoutingModule, SharedModule],
})
export class TestingModule {}
