import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protractor-cucumber-test1';
  value=0;
  
btn(){
  this.value++;
}

}