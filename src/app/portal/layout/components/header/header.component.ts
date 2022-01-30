import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/portal/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() outputToParent = new EventEmitter<boolean>();
  _isOpen: boolean = false;
  constructor(private dataSrv: DataService) {}

  ngOnInit(): void {}
  toggleMenu() {
    this.outputToParent.emit(!this._isOpen);
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
