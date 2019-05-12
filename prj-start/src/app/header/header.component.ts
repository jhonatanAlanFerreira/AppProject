import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selected = new EventEmitter<string>();

  selecting(name:string){
    this.selected.emit(name);
  }

  constructor() { }

  ngOnInit() {
  }

}
