import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisplayOverflow]',
  standalone: false,
})
export class DisplayOverflow {
  private originalText: string = '';

  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onHover() {
    this.originalText = this.el.nativeElement.innerText;
    let innerText = this.el.nativeElement.innerText;
    if (innerText.length > 30) {
      this.el.nativeElement.innerText = innerText.substring(0, 30) + '...';
    }
  }

  @HostListener('mouseleave') onLeave() {
    // console.log('this.originalText: ', this.originalText);
    this.el.nativeElement.innerText = this.originalText;
  }
}
