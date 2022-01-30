import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/portal/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private dataSrv: DataService) {}

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
