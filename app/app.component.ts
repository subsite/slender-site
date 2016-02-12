import {Component} from 'angular2/core';
import {provide}           from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {LoaderComponent}   from './loader/loader.component';
import {NaviService}   from './navi/navi.service';
import {Navi}   from './navi/navi';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        NaviService,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}) // reload page doesn't work without hash... bug?
    ]
})

@RouteConfig([
    { path: '/:page1/:page2', name: 'Loader', component: LoaderComponent }
])

export class AppComponent {

    constructor(private naviService: NaviService) { }
    
    private navi: any;
    private curNaviIdx: number[] = [0,0];

    ngOnInit() {
        this.navi = this.naviService.navi;
        this.onNavi(0,0);
    }
    onNavi(level:number, idx:number) {
        this.naviService.onNavi(level, idx);
        this.curNaviIdx = this.naviService.curNaviIdx;
    }

}
