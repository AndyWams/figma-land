import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  _isOpen: boolean;
  params: object;
  constructor(private dataSrv: DataService) {
    this.params = {
      client_id: environment.client_id,
      client_secret: environment.client_secret,
      refresh_token: environment.refresh_token,
      grant_type: 'refresh_token',
    };
  }

  ngOnInit(): void {
    this.dataSrv.getFreshToken(this.params).subscribe();
  }

  getValFromChildren(val: boolean) {
    this._isOpen = val;
  }
}
