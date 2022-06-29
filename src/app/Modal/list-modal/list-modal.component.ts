import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TypeMatiere } from 'src/app/type-matiere';
import { TypeMatiereServiceService } from 'src/app/type-matiere-service.service';
import { AddMatiereComponent } from '../add-matiere/add-matiere.component';

import { UpdatModalComponent } from '../updat-modal/updat-modal.component';


@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.scss']
})
export class ListModalComponent implements OnInit {
  typeMatiere: TypeMatiere = new TypeMatiere();
  constructor(public typeMatiereSerivce: TypeMatiereServiceService, private router:Router,private dialog: NgbModal ) { }

  ngOnInit(): void {
    this.getTypeMatiere();
  }

    //get data
getTypeMatiere() {
  this.typeMatiereSerivce.getAllTypeMatiere().subscribe(
    response => { this.typeMatiereSerivce.list = response["hydra:member"]; 
  }
  );
}  

  //delete data
removeTypeMatiere(id: number) {
  if (window.confirm('Are sure you want to delete this type ?')) {
    this.typeMatiereSerivce.deleteTypeMatiere(id)
      .subscribe(
        data => {
          console.log(data);
          this.getTypeMatiere();
        },
        error => console.log(error));
  }
}

//open dialog add
openDialog(){
this.dialog.open(AddMatiereComponent,{

});
}
//open dialog update
openDialogUpdate(id:number){
  this.dialog.open(AddMatiereComponent,{

  });
}

}
