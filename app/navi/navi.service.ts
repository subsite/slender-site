import {Injectable} from 'angular2/core';
import {CONF} from '../conf';

@Injectable()
export class NaviService {
    
    navi: any = [];
    // Default navi index first child of first parent
    curNaviIdx: number[] = [0,0];
    
    constructor() {
        // Get navi from conf
        this.navi = CONF.navi;
    }
    getNaviIdx() {
        return this.curNaviIdx;
    }
    onNavi(navLevel: number, navIdx: number) {
        // Set current navigation index 
        // curNaviIdx[0] = first level array index, curNaviIdx[1] = second level.
        this.curNaviIdx[navLevel] = navIdx;
        console.log("NaviService.onNavi curNaviIdx "+ JSON.stringify(this.curNaviIdx));
    }
}