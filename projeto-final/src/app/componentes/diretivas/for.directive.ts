import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMeuFor]'
})
export class ForDirective implements OnInit {

  @Input("appMeuForEm") numbers: number[];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (const numeros of this.numbers) {
      this.container.createEmbeddedView(this.template,
        { $implicit: numeros });
    }
  }

}
