import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RunnerDetailsComponent } from './runner-details/runner-details.component';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'runners/:id',
    component: RunnerDetailsComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
