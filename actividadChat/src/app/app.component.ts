import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaChatComponent } from './sala-chat/sala-chat.component';
import { NgModel } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaChatComponent, NgClass],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'actividadChat';
}
