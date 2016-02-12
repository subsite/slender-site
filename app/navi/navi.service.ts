import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {Navi, NAVI}   from './navi';

@Injectable()
export class NaviService {

    constructor(private router: Router) {
        this.navi = NAVI;
        
    }

    navi: any = [];
    curNaviIdx: number[] = [0,0];

    onNavi(navLevel: number, navIdx: number) {
        this.curNaviIdx[navLevel] = navIdx;
        this.doNavi();
    }

    doNavi() {

        this.router.navigate(['Loader', {
            page1: this.navi[this.curNaviIdx[0]].page, 
            page2: this.navi[this.curNaviIdx[0]].sub[this.curNaviIdx[1]].page
        }]);
    }
}