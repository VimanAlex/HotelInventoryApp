import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators {
    
    static ValidateName(control:AbstractControl){

        const value = control.value as string;

        if(value.includes('Papa')){
            return {invalidName: true}
        }

        return null;

    }

    static ValidateSpecialCharacter(control:FormControl){

        
    }


}
