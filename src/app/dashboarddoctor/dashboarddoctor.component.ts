import { Component } from '@angular/core';
import { EventSettingsModel ,View} from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { DocteurServiceService } from '../docteur-service.service';
import { Rendezvous } from './rendezvous';
import { Patient } from '../loginpatient/patient';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboarddoctor',
  templateUrl: './dashboarddoctor.component.html',
  styleUrls: ['./dashboarddoctor.component.css']
})

export class DashboarddoctorComponent {
  rendervous :Rendezvous =new Rendezvous()
  constructor( private servicedocteur:DocteurServiceService,private router: Router){}
  public setView: View ="Month" 
  public readonly: boolean = true;
  public selectedDate: Date = new Date(2007, 11, 9);
  public Iddoctor= localStorage.getItem("idDocteur");
  private dataManager: DataManager = new DataManager({ 
    url: `http://localhost:8080/rendezvous/docteur/${localStorage.getItem("idDocteur")}`,
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  public eventSettings: EventSettingsModel = {
      allowEditing:true ,
      allowDeleting:true,
      allowAdding:false,
    includeFiltersInQuery: true, dataSource: this.dataManager, fields: {
      id: 'Id',
      subject:  {
          name: 'description'},
      description: { name: 'ShipAddress' },
      startTime: { name: 'dateRendezVousStart' },
      endTime: { name: 'dateRendezVousEnd' },
    }
  };
  
  public onActionBegin(args: any): void {
    if (args.requestType === 'eventChange' && args.changedRecords.length > 0) {
     
      const updatedRecord = args.changedRecords[0];
      console.log(updatedRecord )
      this.rendervous.docteur=updatedRecord.docteur;
      this.rendervous.patient=updatedRecord.patient;
      this.rendervous.description=updatedRecord.description;
      this.rendervous.dateRendezVousStart=updatedRecord.dateRendezVousStart;
      console.log(updatedRecord.dateRendezVousEnd )
      this.rendervous.dateRendezVousEnd=updatedRecord.dateRendezVousEnd;

      const rendezvousId = updatedRecord.id;
      console.log(this.rendervous)


      this.servicedocteur.updateRendezVousDescription(rendezvousId,this.rendervous)
      location.reload()
    }
  }
  reloadPage(): void {
    this.router.navigateByUrl('/dashborddoctor', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
 
}

console.log(localStorage.getItem("idDocteur"))

