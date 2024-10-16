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



import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appClearableDatepicker]'
})
export class ClearableDatepickerDirective {
  @Input() appClearableDatepicker!: FormControl; // Form control to be cleared

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.createClearButton();
  }

  private createClearButton() {
    // Create clear button
    const button = this.renderer.createElement('button');
    this.renderer.addClass(button, 'mat-icon-button');
    this.renderer.attr(button, 'aria-label', 'Clear');
    this.renderer.listen(button, 'click', () => this.clearDate());
    this.renderer.appendChild(button, this.createIcon());

    // Append the button to the input's parent
    const parent = this.el.nativeElement.parentNode;
    this.renderer.appendChild(parent, button);
  }

  private createIcon() {
    const icon = this.renderer.createElement('mat-icon');
    const text = this.renderer.createText('close');
    this.renderer.appendChild(icon, text);
    return icon;
  }

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Check for Backspace or Delete keys
    if (event.key === 'Backspace' || event.key === 'Delete') {
      setTimeout(() => {
        // Clear the control if the input is empty
        if (!this.el.nativeElement.value) {
          this.appClearableDatepicker.setValue(null);
        }
      }, 0);
    }
  }

  private clearDate() {
    this.appClearableDatepicker.setValue(null);
    this.el.nativeElement.value = '';
  }
}



