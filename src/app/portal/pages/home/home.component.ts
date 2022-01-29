import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/assets/local/testimonials';
import { IUsers } from '../../models/user';

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
  constructor() {}

  ngOnInit(): void {}
}
