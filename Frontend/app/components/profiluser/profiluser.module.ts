import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfilUserDisplayComponent } from './profiluser-display/profiluser-display.component';
import { ProfilUserComponent } from './profiluser.component';
import { ProfiluserRoutingModule } from './profiluser-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule,ProfilUserDisplayComponent,ProfilUserComponent,ProfiluserRoutingModule
  ],
  exports: [ProfilUserComponent]
})
export class ProfiluserModule { }
