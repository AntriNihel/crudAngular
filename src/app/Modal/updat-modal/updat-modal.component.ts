import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {NgbModal,ModalDismissReasons,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TypeMatiere } from 'src/app/type-matiere';
import { TypeMatiereServiceService } from 'src/app/type-matiere-service.service';

@Component({
  selector: 'app-updat-modal',
  templateUrl: './updat-modal.component.html',
  styleUrls: ['./updat-modal.component.scss']
})
export class UpdatModalComponent implements OnInit   {
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
  
    this.form = this.formBuilder.group({
      nomTypeMatiere: ['', Validators.required],
    });
    this.typeMatiereSerivce.getTypeMatiere(this.id).
    subscribe(
      response => {
         this.typeMatiereSerivce.list = response["hydra:member"]; 
    }
    );
    
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
  onSubmit(){
   
    this.submitted = true;
    this.loading = true;
   this.updateTypeMatiere();
}
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

gotoList() {
  this.router.navigate(['/listModal']);
}



}