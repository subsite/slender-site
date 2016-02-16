import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {NaviService} from '../navi/navi.service';
import {CONF} from '../conf';
declare var marked: any; // marked.js

@Injectable()
export class LoaderService {

    private navi: any;
    private parent: any;
    private child: any;
    private pageHeader: any = '';

    constructor(
        private http: Http, 
        private naviService: NaviService) { 
            
            this.navi = CONF.navi;
            this.parent = this.navi[this.naviService.curNaviIdx[0]];
            this.child = this.parent.sub[this.naviService.curNaviIdx[1]];
        }

    getPageUrl() {
               
        var defaultUrl = '/' + CONF.siteroot + '/' + CONF.pageroot + '/' + this.parent.page + '/' + this.child.page + '.md'; 
        // remove possible extra slashes
        defaultUrl = defaultUrl.replace(/(\/+)/g, '/');

        // Return custom url if found
        var returnUrl = (this.child.custom_url) 
            ? this.child.custom_url 
            : defaultUrl

        // Get optional page header for overriden urls. Maybe move this to own method.
        if (this.child.custom_url && this.child.page_as_header) {
            this.getFile(defaultUrl)
                .subscribe(data => this.pageHeader = this.markUp(data))
        }

        return returnUrl;
    }
    
    // Get markdownfile with http request
    getFile(httpUrl:string) {
        
        return this.http.get(httpUrl)
            .map(res => this.pageHeader + res.text()) 
            .catch(this.handleError);
            
    }

    // Parse markdown file 
    markUp(md:string) {
        return (marked(md));
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}