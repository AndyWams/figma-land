import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  _isOpen: boolean;
  constructor() {}

  ngOnInit(): void {}

  getValFromChildren(val: boolean) {
    this._isOpen = val;
  }
}
