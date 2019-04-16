import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) { }


  set(key, value): void {
    this.localStorageService.set(key, value);
  } 

  get(key: string): any {
    return this.localStorageService.get(key);
  }

  clearKey(key: string): void {
    this.localStorageService.remove(key);
  }

  clearAll(): void {
    this.localStorageService.clearAll();
  }

}