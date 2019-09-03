import {Component, Input, OnInit, ReflectiveInjector} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {OverlayService} from './overlay.service';

@Component({
  selector: 'rnb-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']/*,
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]*/
})
export class ModalMessageComponent implements OnInit {
  @Input() message;

  visible: boolean = false;

  close() {
    this.visible = false;
  }
  open() {
    this.visible = true;
  }

  setMessage(message: string) {
    this.message = message;
  }
  constructor(private overlay: OverlayService) {

  }

  ngOnInit() {
    this.overlay.createContainerElement();
  }
}
