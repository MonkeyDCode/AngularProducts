import { Component, OnInit, Input, Output , EventEmitter, Injectable } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() public categories;
  @Output() filterCat  = new EventEmitter<number>();

  @Output() filterExport = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  filter(id): void {
      console.log(id);
      this.filterCat.emit(id);
      this.filterExport.emit(id);
    }
}
