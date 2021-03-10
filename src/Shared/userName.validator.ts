import { AbstractControl, ValidatorFn } from "@angular/forms";


// export function ForbiddenNameValidator(control:AbstractControl)
// {
//     const forbidden= /admin/.test(control.value.toLowerCase());   
//     return forbidden? {'forbiddenName':{value:control.value}} :null; 
// }

export function ForbiddenNameValidator(forbiddenNameArg:RegExp):ValidatorFn
{
     return (control:AbstractControl)=>
    {
            const forbidden= forbiddenNameArg.test(control.value.toLowerCase());   
            return forbidden? {'forbiddenName':{value:control.value}} :null; 
     }
}
