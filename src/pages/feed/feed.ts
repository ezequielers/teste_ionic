import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FeedDetailPage } from '../feed-detail/feed-detail';




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

  public loader;
  public refresher;
  public isRefreshing:boolean = false;
  public infiniteScroll;

  public page = 1;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private movieProvider: MovieProvider) {



  }

  ionViewDidEnter() {
    //this.showAlert();
    this.LoadMovies();
  }

  showAlert() {
    //alert("asdf");

    // const alert = this.alertCtrl.create({
    //   title: 'New Friend!',
    //   subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    //   buttons: ['OK']
    // });
    // alert.present();
  }

  LoadMovies(newPage:boolean = false) {
    this.showLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objJson = JSON.parse(response._body);
        console.log(objJson);


        if (newPage) {
          this.list_movies = this.list_movies.concat(objJson.results);
          this.infiniteScroll.complete();
        } else {
          this.list_movies = objJson.results;
        }

        this.hideLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
      , error => {
        console.log(error);
        this.hideLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.LoadMovies();
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.LoadMovies(true);
  }

  showLoading() {
    this.loader  = this.loadingCtrl.create({
      content: "Carregando ...",
    });
    this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }

  showDetail(movie) {
    console.log(movie);
    this.navCtrl.push(FeedDetailPage, { id: movie.id });
  }

}