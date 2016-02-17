import {Injectable} from 'angular2/core';
import {CONF} from '../conf';

@Injectable()
export class NaviService {
    
    
    navi: any[] = []; // Array with navigation structure
    curNaviIdx: number[] = [0,0]; // = [parent-index, child-index] Default navi index first child of first parent
    linkRoot: string;
    
    constructor() {
        this.navi = CONF.navi; 
        this.linkRoot  = (CONF.siteroot + '/').replace(/(\/+)/g, '/'); 
    }

    // Assign navi index when accessing path directly or on page reload
    naviByUrl() { 
        
        var path = window.location.hash.split('/');
        // Find navi array index by page name
        this.curNaviIdx[0] = (path[1]) ? this.navi.map(function(e) { return e.page; }).indexOf(path[1]) : 0;
        this.curNaviIdx[1] = (path[2]) ? this.navi[this.curNaviIdx[0]].sub.map(function(e) { return e.page; }).indexOf(path[2]) : 0;
    }

    onNavi(navLevel: number, navIdx: number) {
        
        if (navLevel == 0 && navIdx != this.curNaviIdx[0]) {
            // On parent change set sub index to 0
            this.curNaviIdx[1] = 0;
        }
        this.curNaviIdx[navLevel] = navIdx;
        return this.curNaviIdx;   
    }
}
