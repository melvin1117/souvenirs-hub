import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-name-initial',
  templateUrl: './name-initial.component.html',
  styleUrls: ['./name-initial.component.scss'],
})
export class NameInitialComponent implements OnInit {
  initial = '';
  @Input() name: string;
  @Input() charCount = 2;
  bgColor: string;
  color: string;

  constructor() {}

  ngOnInit(): void {
    this.getColor();
    this.getInitials();
  }

  getInitials() {
    const words = this.name.split(' ', this.charCount);
    words.forEach((word) => {
      this.initial += word[0];
    });
  }

  getColor() {
    const hue = Math.floor(Math.random() * 360);
    this.bgColor = `hsl( ${hue} , 100%, 80%)`;
    this.color = `hsl( ${hue} , 100%, 35%)`;
  }
}
