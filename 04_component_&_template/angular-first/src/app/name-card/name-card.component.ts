import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  nameCard = {
    cardName: '0152342343',
    email: 'hung@gmail.com',
    phone: '0905468574'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
