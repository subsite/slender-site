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

import {CONF} from './conf';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    directives: [
        ROUTER_DIRECTIVES,
        NaviComponent,
        NaviSubComponent
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
    
    private navi: any;
    private linkRoot: string;
    private curNaviIdx: number[];
    
    constructor(
           private naviService: NaviService,
           private router: Router) { }

    ngOnInit() {
        
        // Get navi menu from service
        this.navi = this.naviService.navi;
        // Create root path for navi links
        this.linkRoot  = (CONF.siteroot + '/').replace(/(\/+)/g, '/');
        
        this.initByUrl();
    }
    
    initByUrl() {
        // In case subpage path is requested directly
        var path = window.location.hash.split('/');
        // Find navi array index by page name
        var nav1 = (path[1]) ? this.navi.map(function(e) { return e.page; }).indexOf(path[1]) : 0;
        var nav2 = (path[2]) ? this.navi[nav1].sub.map(function(e) { return e.page; }).indexOf(path[2]) : 0;
        // Run initial navi based on possible hashpath
        this.naviService.onNavi(0,nav1);
        this.naviService.onNavi(1,nav2);
    }
    
    /*
    // Run when user clicks navi link
    onNavi(level:number, idx:number) {
        // Run navi service tasks, get curNaviIdx
        this.curNaviIdx = this.naviService.onNavi(level, idx);
    }
    */
}
