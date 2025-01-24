import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfilUserDisplayComponent } from './profiluser-display/profiluser-display.component';
import { ProfilUserComponent } from './profiluser.component';

const routes: Routes = [
  {path: 'profiluser', component: ProfilUserComponent, children: [
    {path: 'profiluser-display', component: ProfilUserDisplayComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})

export class ProfiluserRoutingModule {} 