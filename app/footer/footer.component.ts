import {Component, OnInit} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'ss-footer',
    template: `
        <div>&copy; SubSite - Fredrik Welander 2016 <a href="http://www.subsite.fi/#/in-english">http://www.subsite.fi</a></div>
        <div>Version: {{version}}</div>
    `
})

export class FooterComponent implements OnInit {

    private version: string;

    constructor(private http: Http) { }

    ngOnInit() {


        this.http.get('./package.json')
            .map(res => res.json())
            .subscribe(data => this.version = data.version);
    }



}