import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureFlagService } from './feature-flag/feature-flag.service';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
      import('./features/feature1/feature1.module').then(
        (m) => m.Feature1Module
      ),
    canMatch: [() => inject(FeatureFlagService).isFeatureEnabled('feature1')],
  },
  {
    path: 'feature2',
    loadChildren: () =>
      import('./features/feature2/feature2.module').then(
        (m) => m.Feature2Module
      ),
    canMatch: [() => inject(FeatureFlagService).isFeatureEnabled('feature2')],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
