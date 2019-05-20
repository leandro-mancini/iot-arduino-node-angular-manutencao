import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedIndex = 0;

  selectedTabChange(evt: MatTabChangeEvent) {
    console.log(evt.index);

    this.selectedIndex = evt.index;
  }
}
