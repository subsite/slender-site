import {Component, provide, OnInit} from 'angular2/core';
import {
    Router, 
    RouteConfig, 
    ROUTER_DIRECTIVES, 
    ROUTER_PROVIDERS, 
    APP_BASE_HREF,
    LocationStrategy, 
    HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoaderComponent} from './loader/loader.component';
import {NaviService} from './navi/navi.service';
import {NaviComponent} from './navi/navi.component';
import {NaviSubComponent} from './navi/navi-sub.component';
import {FooterComponent} from './footer/footer.component';

import {CONF} from './conf';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    directives: [
        ROUTER_DIRECTIVES,
        NaviComponent,
        NaviSubComponent,
        FooterComponent
    ],
    providers: [
        NaviService,
        HTTP_PROVIDERS,
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}), // Use hash for now, direct access produces 404 with non-hashbang paths
        provide(APP_BASE_HREF, {useValue : '/'})  // replaces router base <base href="/"> 
            
    ]
})

@RouteConfig([
    { path: '/', name: 'Loader', component: LoaderComponent },
    { path: '/:page1', name: 'Loader', component: LoaderComponent },
    { path: '/:page1/:page2', name: 'Loader', component: LoaderComponent }
])

export class AppComponent {

    constructor(private naviService: NaviService) { }

    ngOnInit() {
        this.naviService.naviByUrl();
    }
  
}
