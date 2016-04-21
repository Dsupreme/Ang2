import {Component} from 'angular2/core';
import { masterpage } from './masterpage/masterpage.js'

@Component({
    selector: 'app',
    directives: [masterpage],
    template: '<masterpage></masterpage>'
})
export class AppComponent { }
