// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// custom imports
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
   declarations: [
      // aqui se ponen los componentes
      HeroeComponent,
      ListadoComponent
   ],
   exports: [
      // lo que queremos que sea visible
      ListadoComponent
   ],
   imports: [
      // modulos
      CommonModule
   ]
})
export class HeroesModule {}