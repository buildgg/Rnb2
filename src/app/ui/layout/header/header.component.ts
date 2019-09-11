import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rnb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() loginTime: Date = new Date();
  @Input() loginUser: string;
  @Output() logout = new EventEmitter<any>();

  onLogout() {
    this.logout.emit();
  }
}
