import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StorageService} from '../../services/session-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private http: HttpClient, private storage: StorageService,private router: Router) { }
  ngOnInit() {
    this.getCat();
  }
  getCat(): void {
    this.http.get('assets/data/categories.json').
      subscribe(data => {
        this.storage.set('categories', data);
        this.getProd();
        console.log(data);
      }, err => this.error());
  }
  getProd(){
    this.http.get('assets/data/products.json').
      subscribe(data => {
        this.storage.set('products', data);
        this.router.navigate(['dashboard']);
      }, err => this.error());
  }
  error(){
    console.log('algo salio mal :c');
  }
}
