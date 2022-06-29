import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListModalComponent } from './Modal/list-modal/list-modal.component';
import { AddTypeMatiereComponent } from './typeMatiere/add-type-matiere/add-type-matiere.component';
import { ListTypeMatiereComponent } from './typeMatiere/list-type-matiere/list-type-matiere.component';

const routes: Routes = [
  {
    path: '',
    component : ListTypeMatiereComponent

  },
  {
    path: 'add',
    component : AddTypeMatiereComponent

  },{
    path: 'edit/:id',
    component : AddTypeMatiereComponent

  },
  {
    path: 'listModal',
    component : ListModalComponent

  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
