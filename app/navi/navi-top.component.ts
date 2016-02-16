import {Component} from 'angular2/core';
import {NaviService} from './navi.service';

@Component({
    selector: 'ss-navi-top',
    template: `
        <div *ngFor="#item of navi; #i = index" 
            (click)="onNavi(0, i)" 
            [class.is-active]="i == curNaviIdx[0]">
            
            <a href="{{linkRoot}}#/{{item.page}}/{{item.sub[0].page}}">{{item.name}}</a>
        </div>
    `
})

export class NaviTopComponent extends NaviService { }

