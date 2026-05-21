import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { FooterComponent } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'sweet-layers';
}
