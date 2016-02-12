import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {LoaderService}  from './loader.service';

@Component({
    templateUrl: './app/loader/loader.html',
    selector: 'ss-loader', 
    providers: [LoaderService]
})

export class LoaderComponent {

    constructor(
        private routeParams: RouteParams,
        private loaderService: LoaderService) { }


    private mdPage1: string;
    private mdPage2: string;
    private mdUrl: string;
    private parsedMd: string = '';
    
    ngOnInit() {
        this.mdPage1 = this.routeParams.get('page1');
        this.mdPage2 = this.routeParams.get('page2');
        console.log(this.mdPage1 + '/'+this.mdPage2);
        this.mdUrl = '/pages/' + this.mdPage1 + '/' + this.mdPage2 + '.md';
        this.getMdContent();
        
    }
    
    getMdContent() {
        console.log(this.mdUrl);
        this.loaderService.getRaw(this.mdUrl)
            .subscribe(data => this.parsedMd = this.loaderService.markUp(data))

    }

}