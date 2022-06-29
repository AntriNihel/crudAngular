import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeMatiere } from 'src/app/type-matiere';
import { TypeMatiereServiceService } from 'src/app/type-matiere-service.service';


@Component({
  selector: 'app-list-type-matiere',
  templateUrl: './list-type-matiere.component.html',
  styleUrls: ['./list-type-matiere.component.scss']
})
export class ListTypeMatiereComponent implements OnInit {
  typeMatiere: TypeMatiere = new TypeMatiere();


  constructor(public typeMatiereSerivce: TypeMatiereServiceService, private router:Router) { }

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

//update data
EditTypeMatiere(id: number){
  this.router.navigate(['/edit', id]);
}

}
