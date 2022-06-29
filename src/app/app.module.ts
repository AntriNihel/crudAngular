import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTypeMatiereComponent } from './typeMatiere/list-type-matiere/list-type-matiere.component';
import { AddTypeMatiereComponent } from './typeMatiere/add-type-matiere/add-type-matiere.component';
import { HttpClientModule,HTTP_INTERCEPTORS,HttpClient} from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';
import { ListModalComponent } from './Modal/list-modal/list-modal.component';
import { UpdatModalComponent } from './Modal/updat-modal/updat-modal.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatiereComponent } from './Modal/add-matiere/add-matiere.component';


@NgModule({
  declarations: [
    AppComponent,
    ListTypeMatiereComponent,
    AddTypeMatiereComponent,
    ListModalComponent,
    UpdatModalComponent,
    AddMatiereComponent
  

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
