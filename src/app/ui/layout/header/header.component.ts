import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rnb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() loginTime: Date = new Date();
  @Input() loginUser: string = 'Admin';
}
