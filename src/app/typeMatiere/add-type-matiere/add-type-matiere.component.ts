import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeMatiere } from 'src/app/type-matiere';
import { TypeMatiereServiceService } from 'src/app/type-matiere-service.service';
@Component({
  selector: 'app-add-type-matiere',
  templateUrl: './add-type-matiere.component.html',
  styleUrls: ['./add-type-matiere.component.scss']
})
export class AddTypeMatiereComponent implements OnInit {
  form!: FormGroup;
  isAddMode!: boolean;
  typeMatiere: TypeMatiere = new TypeMatiere();
  id!:number;
  submitted = false;
  loading = false;
  constructor(public typeMatiereSerivce: TypeMatiereServiceService, private router:Router,private route: ActivatedRoute, private formBuilder: FormBuilder
    ) { }
//init
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
  
    this.form = this.formBuilder.group({
      nomTypeMatiere: ['', Validators.required],
    });
  if (!this.isAddMode) {
    this.typeMatiereSerivce.getTypeMatiere(this.id).
    subscribe(
      response => {
         this.typeMatiereSerivce.list = response["hydra:member"]; 
    }
    );
  }
}
get f() { return this.form.controls; }
   //add data
saveTypeMatiere(): void{
  this.typeMatiereSerivce.createTypeMatiere(this.form.value)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => {
      console.error(e)
      this.loading = false;
    }
    });
    this.gotoList();
  }

  newTypeMatiere(): void {
    this.submitted = false;
    this.typeMatiere = new TypeMatiere();
  }
//edit

  updateTypeMatiere() {
    this.typeMatiereSerivce.updateTypeMatiere(this.id, this.form.value)
        .subscribe({
        next: (data) => {
      console.log(data);
          },
        error: error => {
          console.log(error)
          this.loading = false;    
        }
      });
        this.typeMatiere = new TypeMatiere(),
        this.gotoList();
  }

  onSubmit(): boolean  {
    this.submitted = true;
    this.loading = true;
    if (this.form.invalid) {
     alert("non ");
     return false;
  }
    if (this.isAddMode) {
      this.saveTypeMatiere();

      return true;
  } else {
      this.updateTypeMatiere();
      return true;
  }   
  }
  
  gotoList() {
    this.router.navigate(['/']);
  }


}
