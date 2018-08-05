import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:string = "O Bonitão - 1983";

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.showAlert();
  }

  showAlert() {
    //alert("asdf");

    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
