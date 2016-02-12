import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
declare var marked: any; // marked.js

@Injectable()
export class LoaderService {

    constructor(private http: Http) { }

    getJson(httpUrl:string) {
        return this.http.get(httpUrl)
            .map(res => res.json().data) // Response as json. For future use.
            .catch(this.handleError);
    }
    getRaw(httpUrl:string) {
        return this.http.get(httpUrl)
            .map(res => res.text()) // Response as text
            .catch(this.handleError);
    }

    markUp(md:string) {
        //console.log(marked(md));
        return (marked(md));
        
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}