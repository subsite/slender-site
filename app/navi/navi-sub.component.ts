import {Component} from 'angular2/core';
import {NaviService} from './navi.service';
import {NaviComponent} from './navi.component';

@Component({
    selector: 'ss-navi-sub',
    template: `
        <div *ngFor="#item of navi[curNaviIdx[0]].sub; #i = index" 
            (click)="onNavi(1, i)" 
            [class.is-active]="i == curNaviIdx[1]">

            <a href="{{linkRoot}}#/{{navi[curNaviIdx[0]].page}}/{{item.page}}">{{item.name}}</a>
        </div>
    `

})

export class NaviSubComponent extends NaviComponent {
    constructor(private _naviService: NaviService) {
        // undescore because extended, will throw "separate declarations" error otherwise
        super(_naviService);
    }
}