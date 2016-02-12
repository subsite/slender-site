import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Navi, NAVI}   from './navi';

/*@Component({
    templateUrl: './app/navi/navi.html',
    selector: 'ss-navi',
    directives: [ROUTER_DIRECTIVES]
})

export class NaviComponent {

    constructor(
        private router: Router,
        private routeParams: RouteParams) { }

    navi1: Navi[] = [];
    navi2: any = [];
    page1: string;
    page2: string;

    ngOnInit() {
        console.log("navi INIT");
        this.navi1 = NAVI;
        this.navi2 = this.navi1[0].sub;
        this.page1 = this.navi1[0].page;
        this.page2 = this.navi2[0].page;
        this.doNav();

    }

    onNav(level: number, page?: string) {

        if (level == 1) {
            this.page1 = page;
       
            for (var key in this.navi1) {
                if (this.navi1[key].page == this.page1) {
                    this.navi2 = this.navi1[key].sub;
                }
            }
        } else {
            this.page2 = page;
        }

        console.log({ page1: this.page1, page2: this.page2 });
        
        this.doNav();
    }

    doNav() {
        this.router.navigate(['Loader', { page1: this.page1, page2: this.page2 }]);
    }

}*/

