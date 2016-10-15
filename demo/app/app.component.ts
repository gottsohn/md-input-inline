import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: User = new User('Godson', 'vor.nachname@gmail.com', '+234-809-613-2999');
  constructor() {}
}
