import { Directive } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appStringValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: StringValidatorDirective, multi: true }
  ]
})
export class StringValidatorDirective implements Validator {

  constructor() { }
  validate(control: FormControl): ValidationErrors {
    if(typeof control.value != "string"){
      return {'notString':true};
    }
    return null;
  }

}
