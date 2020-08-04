import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  private cores: String[] = ["#e35e6b"];

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.color = this.cores[0];
  }
}
