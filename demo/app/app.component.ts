import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: User;
  countries: string[];
  emailRegExp: RegExp;
  
  constructor() {
    this.emailRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/i;
    this.countries = ['Ivory Coast', 'Kenya', 'Nigeria', 'Sengal'];
    this.user = new User('Godson', 'vor.nachname@gmail.com',
      '+234-809-613-2999', 'Ein lang nachricht');
  }
}
