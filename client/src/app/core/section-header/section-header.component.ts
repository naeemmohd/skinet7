import { Component } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  // public specifier denotes that I can use the service in the html template too
  // private specifier means I can use the service only in the component ts file
  constructor(public bcService: BreadcrumbService){
    
  }
}
