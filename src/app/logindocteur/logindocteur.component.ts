import { Component } from '@angular/core';
import { Docteur } from './docteur';
import { DocteurServiceService } from '../docteur-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindocteur',
  templateUrl: './logindocteur.component.html',
  styleUrls: ['./logindocteur.component.css']
})
export class LogindocteurComponent {

  ngOnInit() {
    if (this.docteurService.isAuthenticated()) {
      this.router.navigate(['/dashborddoctor']);
    }
   // console.log(localStorage.getItem("isAuthenticated"))

  }
  constructor(private docteurService: DocteurServiceService,private router: Router){}
 docteur :Docteur= new Docteur()
 urlimage1= "../../assets/images/100.jpg"
 login(){
  console.log(this.docteur.adresse)
  return this.docteurService.login(this.docteur.adresse,this.docteur.password).subscribe((res:any)=>{
    console.log("hh")
    this.docteurService.setAuthenticated(true)
    
    console.log(this.docteurService.isAuthenticated())
    localStorage.setItem("idDocteur", res.docteur.id_docteur)
    localStorage.setItem("nomDocteur", res.docteur.nom)
    localStorage.setItem("prenomDocteur", res.docteur.prenom)
    

    localStorage.setItem("isAuthenticated",this.docteurService.isAuthenticated().toString())
    this.router.navigate(['/dashborddoctor']);
  })
}

 
}