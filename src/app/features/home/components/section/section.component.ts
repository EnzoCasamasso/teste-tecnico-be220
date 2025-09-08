import { IonContent, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { HomeButtonComponent } from '@features/home/components/home-button/home-button.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonTitle,
    HeaderComponent,
    HomeButtonComponent,
    IonIcon,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionComponent  implements OnInit {
  @Input() sectionTitle: string | null = null;
  
  constructor() { }

  ngOnInit() {}

}
