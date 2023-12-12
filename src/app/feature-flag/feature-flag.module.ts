import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlagService } from './feature-flag.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [FeatureFlagService],
})
export class FeatureFlagModule {}
