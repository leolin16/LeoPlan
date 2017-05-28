import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { IframepageComponent } from './iframepage/iframepage.component';

export const router: Routes = [
    // angular2 prefix shall be?
    { path: '', redirectTo: 'howto', pathMatch: 'full' },
    { path: 'howto', component: HowtoComponent },
    { path: 'examples', component: ExamplesComponent },
    { path: 'iframepage/:ifpurl', component: IframepageComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);