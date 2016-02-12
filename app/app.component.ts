import {Component} from 'angular2/core';
import {provide} from 'angular2/core';
import {
    Router, 
    RouteConfig, 
    ROUTER_DIRECTIVES, 
    ROUTER_PROVIDERS, 
    LocationStrategy, 
    HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LoaderComponent} from './loader/loader.component';
import {NaviService} from './navi/navi.service';

@Component({
    selector: 'ss-app',
    templateUrl: './app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        NaviService,
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy}) 
            // Use hash for now, direct access produces 404 with non-hashbang paths
    ]
})

@RouteConfig([
    { path: '/:page1/:page2', name: 'Loader', component: LoaderComponent }
])

export class AppComponent {
    
    private navi: any;
    private curNaviIdx: number[];
    
    constructor(
           private naviService: NaviService,
           private router: Router) { }

    ngOnInit() {
        // Get navi menu from service
        this.navi = this.naviService.navi;
        this.onNavi(0,0);
    }
    
    // Run when user clicks navi link
    onNavi(level:number, idx:number) {
        // Run navi service tasks
        this.naviService.onNavi(level, idx);
        // Get current navi index
        this.curNaviIdx = this.naviService.curNaviIdx;
        // Navigate navi tree by index
        this.router.navigate(['Loader', {
            page1: this.navi[this.curNaviIdx[0]].page, 
            page2: this.navi[this.curNaviIdx[0]].sub[this.curNaviIdx[1]].page
        }]);
    }
}
