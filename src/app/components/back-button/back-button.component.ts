import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

/**
 * Componente para o botão de voltar.
 *
 * Este componente é responsável por renderizar um botão que, ao ser clicado,
 * navega de volta para a página anterior.
 */
@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent  implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {}

  /**
   * Navega de volta para a página anterior.
   */
  goBack(){
    this.nav.back();
  }

}
