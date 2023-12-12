import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlagService } from './feature-flag.service';
import { FeatureFlagDirective } from './feature-flag.directive';

@NgModule({
  declarations: [
    FeatureFlagDirective
  ],
  exports: [
    FeatureFlagDirective
  ],
  imports: [CommonModule],
  providers: [FeatureFlagService],
})
export class FeatureFlagModule {}
