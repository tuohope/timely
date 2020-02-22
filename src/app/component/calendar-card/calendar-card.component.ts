import {Component, Input, OnInit} from '@angular/core';
import {TimelyEvent} from '../../models/TimelyEvent';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit {

  @Input() timelyEvent: TimelyEvent;
  constructor() { }

  ngOnInit() {
  }

}
