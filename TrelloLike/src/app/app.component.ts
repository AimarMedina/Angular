import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { BoardComponent } from "./board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TrelloLike';
}
