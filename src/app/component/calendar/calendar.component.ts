import {Component} from '@angular/core';
import {CalendarService} from '../../service/calendar.service';
import {TimelyEvent} from '../../models/TimelyEvent';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  allEvents: TimelyEvent[] = [];

  constructor(private calendarService: CalendarService) {
    this.allEvents = this.calendarService.getEvents();
  }
}
