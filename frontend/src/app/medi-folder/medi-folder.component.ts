import { Component } from '@angular/core';

@Component({
  selector: 'app-medi-folder',
  templateUrl: './medi-folder.component.html',
  styleUrls: ['./medi-folder.component.css']
})
export class MediFolderComponent {
  profileUrl:string="../../assets/images/Profile-patient.png";
  medifoldeUrl:string="../../assets/images/MediFolder.png";

  showCompteRendu: boolean = true;
  showCompteRenduDetails: boolean = false;
  showTraitement: boolean = true;
  showTraitementDetails: boolean = false;
  uploadedFiles: File[] = [];

  onFileSelected(event: any) {
    const files: File[] = event.target.files;
    for (const file of files) {
      this.uploadedFiles.push(file);
    }
  }

  uploadFiles() {
    // Implement your logic to save/upload the files to your desired location
    // You can use services or APIs to handle the upload process
  }

  removeFile(file: File) {
    const index = this.uploadedFiles.indexOf(file);
    if (index !== -1) {
      this.uploadedFiles.splice(index, 1);
    }
  } 
  

  toggleCompteRendu() {
    this.showCompteRenduDetails = true;
    this.showCompteRendu = false;
  }

  toggleCompteRenduDetails() {
    this.showCompteRenduDetails = false;
    this.showCompteRendu = true;
  }

  toggleTraitement() {
    this.showTraitementDetails = true;
    this.showTraitement = false;
  }

  toggleTraitementDetails() {
    this.showTraitementDetails = false;
    this.showTraitement = true;
  }

  
}
