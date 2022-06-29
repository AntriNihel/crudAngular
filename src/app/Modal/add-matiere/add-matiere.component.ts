import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal,ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TypeMatiere } from 'src/app/type-matiere';
import { TypeMatiereServiceService } from 'src/app/type-matiere-service.service';
@Component({
  selector: 'app-add-matiere',
  templateUrl: './add-matiere.component.html',
  styleUrls: ['./add-matiere.component.scss']
})
export class AddMatiereComponent implements OnInit {
  closeResult = '';
  id!:number;
  form!: FormGroup;
  submitted = false;
  loading = false;
  typeMatiere: TypeMatiere = new TypeMatiere();

  constructor(public typeMatiereSerivce: TypeMatiereServiceService,private modalService: NgbModal, public modal:NgbActiveModal,private router:Router,
    private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.typeMatiereSerivce.getAllTypeMatiere().subscribe(
      response => { this.typeMatiereSerivce.list = response["hydra:member"]; 
    }
    );
    this.form = this.formBuilder.group({
      nomTypeMatiere: ['', Validators.required],
    });
 
}
get f() { return this.form.controls; }
open(content:any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
saveTypeMatiere(){
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

  newTypeMatiere(){
    this.submitted = false;
    this.typeMatiere = new TypeMatiere();
  }
onSubmit(){
  this.submitted = true;
  this.loading = true;
 this.saveTypeMatiere();
}
gotoList() {
  this.router.navigate(['/listModal']);
}





}


