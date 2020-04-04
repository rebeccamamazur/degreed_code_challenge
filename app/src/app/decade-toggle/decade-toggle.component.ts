import { Component, OnInit, Input } from '@angular/core';
import { DateFilterService } from '../date-filter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-decade-toggle',
  templateUrl: './decade-toggle.component.html',
  styleUrls: ['./decade-toggle.component.scss']
})
export class DecadeToggleComponent implements OnInit {
  @Input() decades: string[];
  @Input() currentDateFilter: string;
  subscription: Subscription;

  constructor(private dateFilterService: DateFilterService) {
    this.subscription = this.dateFilterService
      .getDate()
      .subscribe(date => this.currentDateFilter = date);
  }

  ngOnInit(): void { }

  onFiterDate(date: string) {
    this.dateFilterService.setDate(date);
  }

}
