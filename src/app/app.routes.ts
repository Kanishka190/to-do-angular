// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TodoComponent } from './to-do/to-do.component';

export const appRoutes: Routes = [
  { path: '', component: TodoComponent },
];
