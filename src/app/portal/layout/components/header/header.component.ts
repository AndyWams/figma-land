import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() outputToParent = new EventEmitter<boolean>();
  _isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.outputToParent.emit(!this._isOpen);
  }
}
