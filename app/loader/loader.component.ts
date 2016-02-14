import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {LoaderService} from './loader.service';
import {CONF} from '../conf';

@Component({
    templateUrl: './app/loader/loader.html',
    selector: 'ss-loader', 
    providers: [LoaderService]
})

export class LoaderComponent {

    mdUrl: string;
    parsedMd: string = '';
    
    constructor(
        private routeParams: RouteParams,
        private loaderService: LoaderService) { }
    
    ngOnInit() {
        // Create url from routeParams
        
        this.mdUrl = CONF.pageroot + '/' + this.routeParams.get('page1') + '/' + this.routeParams.get('page2') + '.md';
         // Get file from service and parse it
        this.loaderService.getFile(this.mdUrl)
            .subscribe(data => this.parsedMd = this.loaderService.markUp(data));
    }
    

}