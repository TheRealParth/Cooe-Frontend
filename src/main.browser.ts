/*
 * Providers provided by Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
/*
* Platform and Environment
* our providers/directives/pipes
*/
import { DIRECTIVES, PIPES, PROVIDERS } from './platform/browser';
import { ENV_PROVIDERS } from './platform/environment';
import { FORM_PROVIDERS, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthConfig, AuthHttp, AUTH_PROVIDERS } from 'angular2-jwt';
/*
* App Component
* our top level component that holds all of our components
*/
import { AppComponent, APP_PROVIDERS } from 'app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(AppComponent, [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
    HTTP_PROVIDERS,
    PROVIDERS,
    ENV_PROVIDERS,
    DIRECTIVES,
    PIPES,
    AUTH_PROVIDERS,
    APP_PROVIDERS,
    provide(Window, { useValue: window }),
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'jwt'
        }), http);
      },
      deps: [Http]
    })
  ])
  .catch(err => console.error(err));

}





/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * You can also import them in vendors to ensure that they are bundled in one file
 * Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module
 */


/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
