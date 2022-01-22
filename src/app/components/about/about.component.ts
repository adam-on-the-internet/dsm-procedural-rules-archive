import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public aboutMarkdownPath = `assets/about.md`;
  public disclaimerMarkdownPath = `assets/disclaimer.md`;
}
