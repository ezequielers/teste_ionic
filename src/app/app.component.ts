import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ConfigProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


      let config = ConfigProvider.getConfigData();
      if (config) {
        if (config.showSlide) {
          this.rootPage = IntroPage;
        } else {
          ConfigProvider.setConfigData(false);
          this.rootPage = TabsPage;
        }
      } else {
        this.rootPage = IntroPage;
      }





      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
