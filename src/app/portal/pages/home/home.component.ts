import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/assets/local/testimonials';
import { IUsers } from '../../models/user';
import { NgForm } from '@angular/forms';
import * as AOS from 'aos';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';
interface ContactInfo {
  NAME: string;
  EMAIL: string;
  MESSAGE: string;
}
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
  params: object;
  constructor(private dataSrv: DataService) {
    // window.onbeforeunload = () => {
    //   window.scrollTo(0, 0);
    // };
    this.params = {
      client_id: environment.client_id,
      client_secret: environment.client_secret,
      refresh_token: environment.refresh_token,
      grant_type: 'refresh_token',
    };
  }

  ngOnInit(): void {
    AOS.init({
      once: true,
      //  mirror: false,
    });
    this.dataSrv.getFreshToken(this.params).subscribe();
  }
  onSubmit(form: NgForm) {
    if (form.controls.MESSAGE.value === '') {
      return;
    }

    if (form.value !== '') {
      const { NAME, EMAIL, MESSAGE }: ContactInfo = form.value;
      let obj = {
        values: [[NAME, EMAIL, MESSAGE]],
      };
      this.dataSrv.createContact(obj).subscribe(
        () => {
          console.log('success');
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
  addNewsletter(form: NgForm) {
    if (form.controls.Email.value === '') {
      return;
    }
    if (form.value !== '') {
      const { Email }: any = form.value;
      let obj = {
        values: [[Email]],
      };
      this.dataSrv.createNewsletter(obj).subscribe(
        () => {
          console.log('success');
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
