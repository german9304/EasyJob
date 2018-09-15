import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit(){
  	console.log('on init');
  	fetch('/user')
  	.then(user => user.json())
  	.then(final => console.log(final))
  }
}
