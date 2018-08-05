import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public feeds:object = {
    title: "Título 1",
    date: "November 5, 1955",
    description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    likes: 12,
    comments: 4,
    time_comment: "11h ago"
  }

  public list_movies =  new Array<any>();

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private movieProvider: MovieProvider) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.showAlert();
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objJson = JSON.parse(response._body);
        this.list_movies = objJson.results;
        //console.log(objJson);
      }
      , error => {
        console.log(error);
      }
    )
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
