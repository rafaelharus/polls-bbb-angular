import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appShowElement]'
})
export class ShowElementDirective {

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ) {}

    @HostListener('click')
    show() {
      this.render.addClass(this.el.nativeElement, 'showCaptcha');
    }
}
