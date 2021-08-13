import {Component} from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <event-thumbnail (childEvent)="handleChildEvent($event)" [event]="event1"></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect with VSCode',
    date: '25/06/2021',
    time: '10:00 AM',
    price: 50,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: 'Veledastraße 5, 413',
      city: 'Essen',
      country: 'Germany'
    }
  }
  handleChildEvent(e) {
    console.log('Logging from parent', e);
  }
}
