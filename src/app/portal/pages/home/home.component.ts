import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/assets/local/testimonials';
import { IUsers } from '../../models/user';
import { NgForm } from '@angular/forms';
import * as AOS from 'aos';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private dataSrv: DataService, private toastr: ToastrService) {}

  ngOnInit(): void {
    AOS.init({
      once: true,
    });
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
          this.toastr.success('Contact info submitted', 'Success');
        },
        (error) => {
          this.toastr.error(error, 'Message', {
            timeOut: 2000,
          });
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
          this.toastr.success('Email added...', 'Success');
        },
        (error) => {
          this.toastr.error(error, 'Message', {
            timeOut: 2000,
          });
        },
        () => {
          form.reset();
        }
      );
    }
  }
}
