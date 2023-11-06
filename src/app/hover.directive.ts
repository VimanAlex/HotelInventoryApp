import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() backgroundColor:string = '#F5F5DC';
  textColor:string = 'green'


  constructor(private element:ElementRef,private renderer:Renderer2) {
    console.log(element.nativeElement);
   }
  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // this.element.nativeElement.style.color = this.textColor;
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.backgroundColor);
    this.renderer.setStyle(this.element.nativeElement,'color','green');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','#F5F5DC');
  }

}
