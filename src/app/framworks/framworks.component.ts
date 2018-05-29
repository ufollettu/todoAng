import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framworks',
  templateUrl: './framworks.component.html',
  styleUrls: ['./framworks.component.css']
})
export class FramworksComponent {
  public frameworks: string[] = ['Angular', 'React', 'Vue'];

  getInlineStyles(framework) {
    const styles = {
      'color': framework === 'Angular' ? 'red' : 'green',
      'text-decoration': framework === 'Angular' ? 'underline' : 'none'
    };
    return styles;
  }

  getClasses(framework) {
    const classes = {
      red: framework === 'Angular',
      bolder: framework === 'Angular'
    };
    return classes;
  }
}
