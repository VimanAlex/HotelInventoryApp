import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class CustomValidators {
    
    static ValidateName(control:AbstractControl){ // abstractControl esta base class pentru formControl,formGroup , formArray
                                                // prin aceasta putem accesa toate proprietatile controalelor din form-ului

        const value = control.value as string; // accesarea valorii din controlerul unde o sa apelam metoda

        if(value.includes('Papa')){
            return {invalidName: true}
        }

        return null;

    }

    static ValidateSpecialCharacter(char:string){
       
        const returnResult = (control:AbstractControl)=>{
            const value = control.value as string;

            if(value.includes(char))
            {
                return {invalidchar: true}
            };

            return null;
        }

        return returnResult;
    
    }
    static ValidateDate(control:FormGroup){ // putem folosi de asemenea si abstact control
       
        const checkinDate:any = new Date(control.get('checkinDate')?.value);
        const checkoutDate:any = new Date(control.get('checkoutDate')?.value);
  

        const diffTime = checkoutDate-checkinDate // calcularea diferentei timp
        const diffDays = Math.ceil(diffTime/ 1000*60*60*24) // diferenta de zile 

        if(diffDays <= 0){ // daca diferenta de zile e mai mica ca 0 

            // seteaza ca exista o eroare controlerului respectiv pentrua putea fi adaugata ca validare in UI,
            //apoi se poate adauga un mesaj de eroare pentru aceasta validare
            control.get('checkoutDate')?.setErrors({invalidData:true}) 
            return {invalidDate:true}
        }

        return null;

    }
}
