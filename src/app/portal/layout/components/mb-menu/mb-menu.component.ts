import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mb-menu',
  templateUrl: './mb-menu.component.html',
  styleUrls: ['./mb-menu.component.scss'],
})
export class MbMenuComponent implements OnInit {
  @Output() outputToParent = new EventEmitter<boolean>();
  @Input() isOpen: boolean;
  constructor() {}

  ngOnInit(): void {}

  closeMenu() {
    this.outputToParent.emit(!this.isOpen);
  }
}
