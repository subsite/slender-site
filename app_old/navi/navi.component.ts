import {Component, OnInit} from 'angular2/core';
import {NaviService} from './navi.service';

@Component({
    selector: 'ss-navi',
    template: `
        <div *ngFor="#item of navi; #i = index" 
            (click)="onNavi(0, i)" 
            [class.is-active]="i == curNaviIdx[0]">
            
            <a href="{{linkRoot}}#/{{item.page}}/{{item.sub[0].page}}">{{item.name}}</a>
        </div>
    `
})

export class NaviComponent implements OnInit {
    navi: any;
    linkRoot: string;
    curNaviIdx: number[];

    constructor(private naviService: NaviService) { }

    ngOnInit() {

        this.navi = this.naviService.navi;
        this.linkRoot = this.naviService.linkRoot;
        this.curNaviIdx = this.naviService.curNaviIdx;
    }
    onNavi(level: number, idx: number) {

        this.curNaviIdx = this.naviService.onNavi(level, idx);
    }
}

