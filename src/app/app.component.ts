import { Component } from '@angular/core';
import {CalendarService} from './service/calendar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appReady = false;

  constructor(private calenderService: CalendarService) {
    this.calenderService.fetchCalendarData().subscribe(res => {
      this.appReady = true;
    });
  }
}
