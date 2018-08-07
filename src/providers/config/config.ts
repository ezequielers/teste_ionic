import { Injectable } from '@angular/core';

const key_name = "_config";

@Injectable()
export class ConfigProvider {

  // private _config = {
  //   showSlide: false,
  //   name: "",
  //   username: ""
  // };

  constructor() {

  }

  /* Retrieve LocalStorage Data */
  getConfigData():any {
    return localStorage.getItem(key_name) || null;
  }

  /* Persist LocalStorage Data */
  setConfigData(showSlide?:boolean, name?:string, username?:string) {

    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if (showSlide)
      config.showSlide = showSlide;

    if (name)
      config.name = name;

    if (username)
      config.username = username;

    localStorage.setItem(key_name, JSON.stringify(config));
  }

}
