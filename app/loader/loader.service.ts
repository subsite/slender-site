import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
declare var marked: any; // marked.js

@Injectable()
export class LoaderService {

    constructor(private http: Http) { }

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