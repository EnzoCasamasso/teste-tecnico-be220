import { IonContent, IonTitle, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HeaderComponent } from '@features/home/components/header/header.component';
import { HomeButtonComponent } from '@features/home/components/home-button/home-button.component';
import { SectionComponent } from '@features/home/components/section/section.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonTitle,
    HeaderComponent,
    HomeButtonComponent,
    IonIcon,
    SectionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
