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

    onNavi(navLevel: number, navIdx: number) {
        // Set current navigation index 
        
        // On parent change set sub index to 0
        if (navLevel == 0 && navIdx != this.curNaviIdx[0]) {
            this.curNaviIdx[1] = 0;
        }
        
        // curNaviIdx[0] = first level array index, curNaviIdx[1] = second level.
        this.curNaviIdx[navLevel] = navIdx;
        console.log("NaviService.onNavi curNaviIdx "+ JSON.stringify(this.curNaviIdx));
    }
}