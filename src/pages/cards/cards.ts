import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItensCotacao } from '../../models/itensCotacao';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  public obj: any;
  public heroes: any;

  public itens: Array<ItensCotacao> = [
    { codigo: 1, descricao: "parafuso", qtde: 1, preco: 10, total: 10, marca: "Bosch", codigoFornecedor: 1, descricaoFornecedor: "Belota" },
    { codigo: 2, descricao: "porca", qtde: 1, preco: 10, total: 10, marca: "Bosch", codigoFornecedor: 1, descricaoFornecedor: "Skill" },
    { codigo: 3, descricao: "martelo", qtde: 1, preco: 10, total: 10, marca: "Bosch", codigoFornecedor: 1, descricaoFornecedor: "Bosch" },
    { codigo: 3, descricao: "martelo", qtde: 1, preco: 10, total: 10, marca: "Bosch", codigoFornecedor: 1, descricaoFornecedor: "Bosch" },
    { codigo: 3, descricao: "martelo", qtde: 1, preco: 10, total: 10, marca: "Bosch", codigoFornecedor: 1, descricaoFornecedor: "Bosch" },
    { codigo: 3, descricao: "martelo", qtde: 1, preco: 10, total: 10, marca: "Bosch", codigoFornecedor: 1, descricaoFornecedor: "Bosch" }
  ];

  item1 = new ItensCotacao(1, "parafuso", 1, 10, 10, "bosch", 10, "Casa do parafuso")
  item2 = new ItensCotacao(1, "parafuso", 1, 10, 10, "bosch", 10, "Casa do parafuso")
  item3 = new ItensCotacao(1, "parafuso", 1, 10, 10, "bosch", 10, "Casa do parafuso")

  constructor(public navCtrl: NavController, public navParams: NavParams, public heroService: HeroServiceProvider) {
    this.getAllHeroes()
    //this.getAllHeroes()
  }

  getAllHeroes() {
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }
}
