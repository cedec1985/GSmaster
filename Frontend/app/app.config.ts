import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes} from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr')

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideAnimations(), 
    provideNoopAnimations(),
    provideHttpClient(), provideAnimationsAsync('noop'), provideAnimationsAsync('noop')
  ]
};


