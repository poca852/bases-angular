import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

// custom imports
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
   declarations: [
      ContadorComponent
   ],
   exports: [
      ContadorComponent
   ],
   imports: [
      CommonModule
   ]
})
export class ContadorModule {}