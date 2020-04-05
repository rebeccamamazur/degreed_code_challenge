import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
  * DateFilterService
  * Manage changes to selected filter value and emits change
  * to subscribers
  */
export class DateFilterService {
  private now = new Date();
  /* Subjects are observables, makes it easy to pass data between siblings */
  private filterDate = new Subject<string>();

  constructor() {
    this.filterDate.next('');
  }

  setDate(date: string) {
    this.filterDate.next(date);
  }

  getDate(): Observable<string> {
    return this.filterDate.asObservable();
  }
}
