
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Platform } from 'ionic-angular';

@Injectable()
export class CartolaProvider {

  basepath = window.location.origin + "/cartolaapi";

  constructor(public http: Http, private _platform: Platform) {
    if (this._platform.is("cordova")) {
      this.basepath = "https://api.cartolafc.globo.com";
    }
  }

  atletas() {
    // return this.http.get(this.basepath + "/atletas/mercado");
    return this.http.get(this.basepath + "/atletas/mercado");
  }

}
