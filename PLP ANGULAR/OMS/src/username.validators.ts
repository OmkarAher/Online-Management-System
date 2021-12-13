import {AbstractControl , ValidationErrors } from '@angular/forms';

export class Custom {
    static cannotcontainspace(control: AbstractControl): ValidationErrors | null {
        console.log('asdbsdhj');
        if ((control.value as String).indexOf(' ') >= 0) {
            return {cannotcontainspace: true};
        } else {
            return null;
        }
    }
}
