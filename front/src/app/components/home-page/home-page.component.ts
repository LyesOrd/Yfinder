import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public text: string = '';
  public texts: string[] = ['Texte 1', 'Texte 2', 'Texte 3'];
  public index: number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.text = this.texts[this.index];
      this.index = (this.index + 1) % this.texts.length;
    }, 1000);
  }

}
