import {Component, Input} from 'angular2/core';
import {navbarComponent} from './navbar/navbar'

@Component({
  selector: 'masterpage',
  directives: [navbarComponent],
  templateUrl: 'app/masterpage/masterpage.html',
  styleUrls: ['app/masterpage/masterpage.css']

})

export class masterpage {
}
