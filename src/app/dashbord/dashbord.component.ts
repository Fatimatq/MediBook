import { Component } from '@angular/core';
import { EventSettingsModel, View,} from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
    public setView: View ="Month" 
    public readonly: boolean = true;
    public selectedDate: Date = new Date(2007, 11, 9);
    private dataManager: DataManager = new DataManager({
      url: 'http://localhost:8080/rendezvous/',
      adaptor: new ODataV4Adaptor,
      crossDomain: true
    });
    public eventSettings: EventSettingsModel = {
        allowEditing: false,
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
  
}
