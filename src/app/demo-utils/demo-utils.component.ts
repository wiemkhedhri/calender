import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarView } from 'angular-calendar';
@Component({
  selector: 'app-demo-utils',
  templateUrl: './demo-utils.component.html',
  styleUrls: ['./demo-utils.component.css']
})
export class DemoUtilsComponent implements OnInit {

  constructor() { }
  @Input() view: CalendarView;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;
  ngOnInit(): void {
  }

}
