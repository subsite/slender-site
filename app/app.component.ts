import {Component} from 'angular2/core';
import {provide}           from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {LoaderComponent}   from './loader/loader.component';
import {NaviComponent}   from './navi/navi.component';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}) // reload page doesn't work without hash... bug?
    ]
})

@RouteConfig([
    { path: '/', name: 'Navi', component: NaviComponent },
    { path: '/:page1/:page2', name: 'Loader', component: LoaderComponent }
])

export class AppComponent {

    constructor() { }

}
