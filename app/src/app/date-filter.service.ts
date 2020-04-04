import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateFilterService {
  private now = new Date();
  /* Subjects are observables, makes it easy to pass data between siblings */
  private filterDate = new Subject<string>();

  constructor() {
    this.filterDate.next('2020');
  }

  setDate(date: string) {
    this.filterDate.next(date);
  }

  getDate(): Observable<string> {
    return this.filterDate.asObservable();
  }
}
