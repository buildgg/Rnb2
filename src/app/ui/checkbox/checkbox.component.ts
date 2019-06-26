import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'rnb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [{
  provide: NG_VALUE_ACCESSOR,
  useExisting: CheckboxComponent,
  multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() labelCheckBox: string;

  checked: boolean = false;

  _onChange = (_: any) => {};
  _onTouched = () => {};

  writeValue(value: any ): void {
    if (value !== null) {
      this.checked = value;
    }
  }

  registerOnChange(fn: any ): void {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  onChange( data) {
    this._onChange(data);
  }
  onTouched() {
    this._onTouched();
  }
}
