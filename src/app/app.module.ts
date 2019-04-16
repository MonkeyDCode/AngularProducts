import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import {StorageService} from './services/session-storage.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MenuComponent } from './components/menu/menu.component';
import { ProdsComponent } from './components/prods/prods.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoaderComponent,
    MenuComponent,
    ProdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    HttpClientModule,
    FormsModule,
    LocalStorageModule.forRoot({
      prefix: 'rappi',
      storageType: 'sessionStorage'
  })
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
