import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/session-storage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private  products = [];
  private categories = [];
  private filter = -1;
  constructor( private storage: StorageService, ) { }

  ngOnInit() {
    this.categories = this.storage.get('categories').categories;
    this.products = this.storage.get('products').products;

  }
  applyFilter(id){
    console.log(id);
    this.filter = id;
  }

}
