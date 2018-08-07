import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';

import { HttpModule } from "@angular/http";
import { ConfigProvider } from '../providers/config/config';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FeedDetailPageModule } from '../pages/feed-detail/feed-detail.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    HttpModule,

    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FeedDetailPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    FeedPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    ConfigProvider
  ]
})
export class AppModule {}
