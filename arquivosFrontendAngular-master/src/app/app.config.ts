import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return sessionStorage.getItem("jwt");
}
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch())
,     provideRouter(routes, withComponentInputBinding()), provideClientHydration(),provideHttpClient(),importProvidersFrom(
    JwtModule.forRoot({
        config: {
            tokenGetter: tokenGetter,
        },
    }),
),provideAnimationsAsync(), provideAnimationsAsync()]
};
