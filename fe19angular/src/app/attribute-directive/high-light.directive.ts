import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private ele: ElementRef, private render2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "yellow";
    this.render2.setStyle(this.ele.nativeElement, "background-color","yellow")
   }

   @HostBinding('style.backgroundColor') bgColor:string = "red";

   @HostListener('mouseenter') SuKienHover(){
     this.render2.setStyle(this.ele.nativeElement,"background-color","blue")
   }

   @HostListener('mouseleave') SuKienLeave(){
    this.render2.setStyle(this.ele.nativeElement,"background-color","yellow")
   }
}
