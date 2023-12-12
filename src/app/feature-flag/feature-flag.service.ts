import { Injectable } from '@angular/core';

export type Feature = 'feature1' | 'feature2' | 'feature3';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  isFeatureEnabled(featureName: Feature): boolean {
    switch (featureName) {
      case 'feature1':
        return true;
      case 'feature2':
        return false;
      case 'feature3':
        return true;
      default:
        return false;
    }
  }
}
