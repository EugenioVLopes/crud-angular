import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

/**
 * Objeto de configuração para a aplicação.
 * Colocar o provider do cliente http nesse arquivo por causa da versão do angular,
 * se não dará erro de importação do http client.
 */
/**
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
};
