
import { AbstractControl } from "@angular/forms";

export function emailValidator(control : AbstractControl)
{
    let value : string = control.value;

    if(value.length == 0)
        return { email : "votre email est requis"}

    if(value.length < 6)
        return { email : "Votre email n'est pas valide, elle ne peux pas contenir moins de 6 caractères"}
    let testMatch = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
    if(testMatch && testMatch[0] == value)
        return null
    else
        return { email : "Votre email n'est pas valide"}
}