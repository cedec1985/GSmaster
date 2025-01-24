import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true,
})
export class CurrencyPipe implements PipeTransform {

  frais!: number ;
  total!: number ;
  soustotal!: number;

  transform(
    frais : any, 
    total : any, 
    soustotal : any,
    currencyCode?: '€', 
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean): string {
        return this.transform({frais,total,soustotal}, currencyCode, display);
    }
}


