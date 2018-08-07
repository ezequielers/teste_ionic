import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed-detail',
  templateUrl: 'feed-detail.html',
  providers: [
    MovieProvider
  ]
})

export class FeedDetailPage {

  public loader;

  public movie;
  public movieId;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private movieProvider: MovieProvider
  ) {



  }

  ionViewDidEnter() {
    this.movieId = this.navParams.get('id');
    this.loadDetais();
  }

  loadDetais() {
    this.showLoading();
    this.movieProvider.getMovieDetails(this.movieId).subscribe(
      data => {
        const response = (data as any);
        this.movie = JSON.parse(response._body);

        this.hideLoading();
      }
      , error => {
        console.log(error);
        this.hideLoading();
      }
    )
  }

  showLoading() {
    this.loader  = this.loadingCtrl.create({
      content: "Carregando ..."
    });
    this.loader.present();
  }

  hideLoading() {
    this.loader.dismiss();
  }

}
