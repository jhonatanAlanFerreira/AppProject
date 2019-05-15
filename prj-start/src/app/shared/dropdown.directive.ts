import { Directive, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  open = false;

  constructor(private renderer:Renderer2, private element:ElementRef) { }

  ngOnInit(){
    this.renderer.addClass(this.element.nativeElement,"btn-group");
  }

  @HostListener('click') clicked(){
    this.open = !this.open;
    let element = this.element.nativeElement;
    this.open? this.renderer.addClass(element,"open"): this.renderer.removeClass(element,"open");
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.element.nativeElement.contains(event.target)){
      this.open = false;
      this.renderer.removeClass(this.element.nativeElement,"open");
    } ;
  }
}
