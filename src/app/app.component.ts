import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styles: `
    h1 {
      // color: red;
    }
  `
})
export class AppComponent {
  city = 'Barcelona';
}
