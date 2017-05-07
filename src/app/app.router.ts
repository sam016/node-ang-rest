import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFoodComponent } from './components/page-food/page-food.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'food', component: PageFoodComponent }
];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);