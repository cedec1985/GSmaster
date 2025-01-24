
import { Directive, ElementRef, Input} from '@angular/core';


@Directive({
 selector: '[verificationStock]',
 standalone: true
})
export class StockEpuiseDirective {
  @Input() quantity: number = 0;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.verifierStock();
  }

  verifierStock() {
    if (this.quantity > 5) {
      this.elementRef.nativeElement.innerText = 'Stock épuisé';
    } else {
      this.elementRef.nativeElement.innerText = '';
    }
  }
}

