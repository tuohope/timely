import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, mergeMap} from 'rxjs/operators';
import {TimelyEvent} from '../models/TimelyEvent';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

  getEvents(): TimelyEvent[] {
    return JSON.parse(localStorage.getItem('CalendarEvents'));
  }

  fetchCalendarEvent() {
    let settings = JSON.parse(localStorage.getItem('CalendarSettings'));
    let url = `https://timelyapp.time.ly/api/calendars/${settings.id}/events`;
    return this.http.get(url).pipe(map(eventRes => {
      localStorage.setItem('CalendarEvents', JSON.stringify(eventRes['data']['items']));

      return eventRes;
    }));
  }

  fetchCalendarData() {
    let url = 'https://timelyapp.time.ly/api/calendars/info';
    let data = {url: 'https://calendar.time.ly/ficceyp4'};
    return this.http.post(url, data).pipe(mergeMap(res => {
      localStorage.setItem('CalendarSettings', JSON.stringify(res['data']));
      return this.fetchCalendarEvent();
    }));
  }

}
