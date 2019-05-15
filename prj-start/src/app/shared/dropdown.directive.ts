import { Directive, ElementRef, Renderer2, HostListener, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownButton]'
})

export class DropdownDirective implements OnInit {
  @Input('appDropdownButton') name:string;
  @HostBinding('class.open') open = false;

  constructor(private renderer:Renderer2, private element:ElementRef) { }

  ngOnInit(){

    this.renderer.setProperty(this.element.nativeElement,'innerHTML',
    '<button class="btn btn-primary dropdown-toggle">'+this.name+' <span class="caret"></span></button><ul class="dropdown-menu">'
    +this.element.nativeElement.innerHTML+'</ul>'
    );

  }

  @HostListener('document:click', ['$event'])
  click(event) {
    this.open = !this.element.nativeElement.contains(event.target)? false: !this.open;
  }
}