import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {Navi, NAVI}   from './navi';

@Injectable()
export class NaviService {

    constructor(private router: Router) { }

    navi: Navi[] = [];
    mainNaviIdx: number = 0;
    subNaviIdx: number = 0;
    subNavi: any;

    ngOnInit() {
        console.log("NaviService INIT");
    }

    getMainNavi() {
        this.navi = NAVI;
        return this.navi;
        this.subNavi = this.navi[this.mainNaviIdx].sub;
        console.log("getMainNavi: "+JSON.stringify(this.subNavi));
    }

    getSubNavi() {
        return this.subNavi;
    }
    
    getSubNaviIdx() {
        return this.subNaviIdx;
    }

    onNavi(navLevel: number, navIdx: number) {
        console.log("onNavi: "+navIdx);
        if (navLevel == 0) {
            this.mainNaviIdx = navIdx;
        } else {
            this.subNaviIdx = navIdx;
        }
        this.subNavi = this.navi[this.mainNaviIdx].sub;

        this.doNavi();
    }

    doNavi() {
        console.log("doNavi: "+this.mainNaviIdx+"-"+this.subNaviIdx);
        this.router.navigate(['Loader', {
            page1: this.navi[this.mainNaviIdx].page, 
            page2: this.subNavi[this.subNaviIdx].page
        }]);
    }
}