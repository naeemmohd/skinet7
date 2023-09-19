import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})

//ControlValueAccessor - bridge between Angular forms and native DOM. Used to create custom form control
export class TextInputComponent implements ControlValueAccessor {

  @Input() type = 'text';
  @Input() label = '';

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  get control(): FormControl {
    return this.controlDir.control as FormControl;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}
