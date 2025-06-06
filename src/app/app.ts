import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { Array } from './array/array'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Array],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'DSA-Visualiser';
}
