import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/portal/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private dataSrv: DataService, private toastr: ToastrService) {}

  ngOnInit(): void {}
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
