import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/assets/local/testimonials';
import { IUsers } from '../../models/user';
import { NgForm } from '@angular/forms';
import * as AOS from 'aos';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  testimonials: IUsers[] = Testimonials;
  more: boolean = false;
  contactDetails: Object = {};
  constructor(private dataSrv: DataService) {
    // window.onbeforeunload = () => {
    //   window.scrollTo(0, 0);
    // };
  }

  ngOnInit(): void {
    AOS.init({
      once: true,
      //  mirror: false,
    });
  }
  onSubmit(form: NgForm) {
    console.log(form);

    if (form.controls.MESSAGE.value === '') {
      console.log('please enter mesage');
      return;
    }

    if (form.status === 'VALID') {
      console.log(form.value);
      this.contactDetails = form.value;
      let obj = {
        spreadsheetId: environment.SPREADSHEET_ID,
        tableRange: 'contact!A1:C1',
        updates: this.contactDetails,
      };
      this.dataSrv.createContact(obj).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          form.reset();
        }
      );
    }
  }
}
