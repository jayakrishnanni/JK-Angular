import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDatepickerClear]'
})
export class DatepickerClearDirective {

  constructor(private control: NgControl) {}

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      // Clear the value for the form control
      this.control.control?.setValue(null);
    }
  }
}