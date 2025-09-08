import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { IonIcon, IonCol, IonRow, IonGrid, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
  imports: [
    CommonModule,
    IonIcon,
    IonCol,
    IonRow,
    IonGrid,
    IonImg
]
})
export class HomeButtonComponent implements OnInit {
  @Input() label!: string | null;
  @Input() subLabel!: string | null;
  @Input() title!: string | null;
  @Input() subTitle!: string | null;
  @Input() icon!: string | null;
  @Input() image!: string | null;

  ngOnInit() {}
}
