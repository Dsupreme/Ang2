import {Component, Input} from 'angular2/core';
import {reportCatalogComponent} from './reportCatalog/reportCatalog';

@Component({
  selector: 'navbar',
  directives: [reportCatalogComponent],
  templateUrl: 'app/masterpage/navbar/navbar.html',
  styleUrls: ["app/masterpage/navbar/navbar.css"]
})

export class navbarComponent {
}
