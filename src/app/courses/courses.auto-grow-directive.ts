import {Renderer, ElementRef, Directive, HostListener, HostBinding} from "@angular/core";

// @Directive({
//   selector: '[autoGrow]',
// })
// export class AutoGrowDirective {
//   @HostBinding('style.width.px')
//   width: number = 100;
//
//   constructor(private el: ElementRef, private renderer: Renderer) {
//   }
//
//   @HostListener('focus') onFocus() {
//     this.grow(200);
//   }
//
//   @HostListener('blur') onBlur() {
//     this.grow(100);
//   }
//
//   private grow(width: number) {
//     this.width = width;
//   }
// }

@Directive({
  selector: '[autoGrow]',
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})
export class AutoGrowDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  onBlur() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '100px');
  }

  onFocus() {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
  }
}
