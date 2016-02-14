import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {NaviService} from '../navi/navi.service';
import {CONF} from '../conf';
declare var marked: any; // marked.js

@Injectable()
export class LoaderService {

    private navi: any;

    constructor(
        private http: Http, 
        private routeParams: RouteParams,
        private naviService: NaviService) { 
            
            this.navi = CONF.navi;
        }

    getPageUrl() {
        
        var sub = this.navi[this.naviService.curNaviIdx[0]].sub[this.naviService.curNaviIdx[1]];
        
        if (sub.custom_url) {
            console.log("custom_url: "+sub.custom_url);
        }
        
        console.log("index:"+this.navi[this.naviService.curNaviIdx[0]].sub.map(function(e) { return e.page; }).indexOf(this.routeParams.get('page2')));
        
         return CONF.pageroot + '/' + this.routeParams.get('page1') + '/' + this.routeParams.get('page2') + '.md';

    }

    // Get markdownfile with http request
    getFile(httpUrl:string) {
        
        
        return this.http.get(httpUrl)
            .map(res => res.text()) 
            .catch(this.handleError);
    }

    // Parse markdown file 
    // External marked.js is temporary until a working angular2 markdown parser is available
    markUp(md:string) {
        return (marked(md));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}