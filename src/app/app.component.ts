import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    {
      title: 'Tree',
      imageUrl: '/assets/images/tree.jpeg',
      username: 'nature',
      content: 'It is an image which shows us a tree'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: '/assets/images/mountain.jpeg',
      username: 'mountainlover',
      content: 'This image is displaying us snowy mountain'
    },
    {
      title: 'Bike Stunt',
      imageUrl: '/assets/images/biking.jpeg',
      username: 'stuntmaster',
      content: 'A man is performing some bike stunts in this image'
    }
  ]
}
