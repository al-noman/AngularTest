import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2 [style]="'font-style: italic;'">{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div [ngClass]="getStartTimeClass()"
           [ngSwitch]="event?.time" >
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early shift)</span>
        <span *ngSwitchCase="'10:00 am'">(Late shift)</span>
        <span *ngSwitchDefault>(Normal Shift)</span>
      </div>
      <div [class.red]="event?.price > 900" [ngStyle]="getStyleForCheapPrice()">Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
<!--      <button class="btn btn-primary" (click)="handleClick()" style="display: none">Click Me</button>-->
    </div>
  `,
  styles: [`
    .thumbnail {min-height: 250px;}
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb;}
    .green {color: green !important;}
    .red {color: red !important;}
    .bold {font-weight: bold; font-size: large;}
  `],
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() childEvent = new EventEmitter();

  handleClick() {
    console.log('Log from child');
    this.childEvent.emit(this.event);
  }

  logFoo() {
    console.log('This is to test template variable');
  }

  getStartTimeClass() {
    if (this.event.time === '10:00 am')
      return 'red'
    return ['green', 'bold']
  }

  getStyleForCheapPrice() {
    if (this.event?.price < 700) {
      return {color: 'green', 'font-size': 'xx-large'}
    }
  }
}
