import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom Validator: No leading or only spaces allowed
export function noStartingOrOnlySpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = control.value && control.value.trim().length > 0;
    return !isValid ? { noStartingOrOnlySpaces: true } : null;
  };
}





import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class YourComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      yourField: ['', [Validators.required, noStartingOrOnlySpacesValidator()]]
    });
  }

  // Getter for easier access to form controls
  get yourField() {
    return this.form.get('yourField');
  }
}





<form [formGroup]="form">
  <label for="yourField">Your Field</label>
  <input id="yourField" formControlName="yourField">
  <div *ngIf="yourField.errors?.noStartingOrOnlySpaces && yourField.touched">
    Value cannot contain only spaces or start with a space.
  </div>
</form>