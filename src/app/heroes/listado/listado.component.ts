import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];
  heroeDelete: string = '';
  
  borrarHeroe() {
    this.heroeDelete = this.heroes.shift() || '';
  }

}
