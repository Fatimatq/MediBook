import { Component } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  
  styleUrls: ['./signup.component.css'],
  styles: [
		`
			.custom-day {
				text-align: center;
				padding: 0.185rem 0.25rem;
				border-radius: 0.25rem;
				display: inline-block;
				width: 2rem;
			}
			.custom-day:hover,
			.custom-day.focused {
				background-color: #e6e6e6;
			}
			.weekend {
				background-color: #f0ad4e;
				border-radius: 1rem;
				color: white;
			}
			.hidden {
				display: none;
			}
		`,
	],

})
export class SignupComponent {
  
  urlimage1= "../../assets/images/15.png"
  model!: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgbCalendar) {}

}
