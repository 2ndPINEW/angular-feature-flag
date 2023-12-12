import {
  Directive,
  Input,
  type OnInit,
  inject,
} from '@angular/core';
import { Feature, FeatureFlagService } from './feature-flag.service';
import { NgIf } from '@angular/common';

@Directive({
  selector: '[appFeatureFlag]',
  hostDirectives: [NgIf],
})
export class FeatureFlagDirective implements OnInit {
  @Input() appFeatureFlag!: Feature;

  private readonly ngIfDirective = inject(NgIf);
  private readonly featureFlagsService = inject(FeatureFlagService);

  ngOnInit(): void {
    this.ngIfDirective.ngIf = this.featureFlagsService.isFeatureEnabled(
      this.appFeatureFlag,
    );
  }
}
