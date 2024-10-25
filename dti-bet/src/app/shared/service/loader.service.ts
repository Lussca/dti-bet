import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = false;

  constructor() { }

  setLoading(loading: boolean) {
    console.log(`Setando loading: ${loading}`);
    this.loading = loading;
  }

  getLoading(): boolean {
    console.log(`Loading: ${this.loading}`);
    return this.loading;
  }
}