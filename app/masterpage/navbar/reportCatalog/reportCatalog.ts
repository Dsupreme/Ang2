import {Component, Input} from 'angular2/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'reportCatalog',
  directives: [MaterializeDirective],
  templateUrl: 'app/masterpage/navbar/reportCatalog/reportCatalog.html',
  styles: [`
    .nav-center {
      margin: 0.9em !important;
    }
  `]
  
})

export class reportCatalogComponent {

}
