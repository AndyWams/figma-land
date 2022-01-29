import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/assets/local/testimonials';
import { IUsers } from '../../models/user';
import * as AOS from 'aos';

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
  constructor() {
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
}
