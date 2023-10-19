import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmpoyeeComponent } from '../empoyee/empoyee.component';

@Component({
  selector: 'hinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements AfterContentInit {
  
  @ContentChild(EmpoyeeComponent) employee!:EmpoyeeComponent;

  ngAfterContentInit(): void {
   
    this.employee.employeeName = 'George';
  }
}
