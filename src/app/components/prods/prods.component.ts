import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.scss']
})
export class ProdsComponent implements OnInit {
  private _filter = -1;
  @Input()
  set filter(filter: number) {
    this._filter = filter;
    this.applyFilter(filter);
  }
  @Input() products =[];
  public typefilter = 'ninguno';
  public filtered =0;
  private viewList=[];
  public initialP=0;
  public finalP=0;
  public initialS=0;
  public finalS =0;
  constructor() { }

  ngOnInit() {
    this.viewList = this.products;
  }
  applyFilter(id){
    this.viewList = this.products.filter(
      item => item.sublevel_id === id);
      console.log(this.viewList)
  }

  filterBy(type){
    console.log(type)
    if(type!== 'ninguno'){
      this.viewList =  _.orderBy(this.viewList, [type],['asc']);
    }
  }
  
  filterByAva(flag){
    this.viewList = this.products.filter(
      item => item.available === flag);
    this.typefilter = 'ninguno';
  }
  filterByPrice(a, b){
    const temporalList = this.products.filter(
      item => Number(item.price.replace('$', '').replace(',', '') ) > a);
    this.viewList = temporalList.filter(
      item => Number(item.price.replace('$', '').replace(',', '') ) < b);
    this.typefilter = 'ninguno';
  }
  filterByStock(a, b){
    const temporalList = this.products.filter(
      item => item.quantity > a);
    this.viewList = temporalList.filter(
      item => item.quantity < b);
    this.typefilter = 'ninguno';
  }

}
