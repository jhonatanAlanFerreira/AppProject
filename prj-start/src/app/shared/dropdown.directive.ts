import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private element:ElementRef) {}
  
  @HostListener('document:click', ['$event']) clicked (event){
   this.element.nativeElement.contains(event.target)? this.isOpen = !this.isOpen : this.isOpen = false;
  }
}