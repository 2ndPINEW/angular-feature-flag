import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  type OnInit,
} from '@angular/core';
import { Feature, FeatureFlagService } from './feature-flag.service';

@Directive({
  selector: '[appFeatureFlag]',
})
export class FeatureFlagDirective implements OnInit {
  @Input() appFeatureFlag!: Feature;

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly featureFlagsService: FeatureFlagService,
  ) {}

  ngOnInit(): void {
    if (!this.featureFlagsService.isFeatureEnabled(this.appFeatureFlag)) {
      this.renderer.removeChild(
        this.el.nativeElement.parentNode,
        this.el.nativeElement,
      );
    }
  }
}
