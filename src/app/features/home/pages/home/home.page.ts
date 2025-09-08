import { IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '@features/home/components/header/header.component';
import { SectionComponent } from '@features/home/components/section/section.component';
import { HomeButtonProps } from '@features/home/components/home-button/home-button.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, IonContent, HeaderComponent, SectionComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  personalOnline: HomeButtonProps[] = [
    { label: 'NOVO', subLabel: 'TREINO', icon: 'add-circle-outline', image: 'assets/home-buttons/gym2.png' },
    { title: 'YOGA', image: 'assets/home-buttons/gym1.png' },
  ];

  programas: HomeButtonProps[] = [
    { title: 'LEVANTAMENTO DE PESO', subTitle: 'Continuar Treinando', image: 'assets/home-buttons/gym2.png' },
    { title: 'YOGA', image: 'assets/home-buttons/gym1.png' },
  ];

  conteudos: HomeButtonProps[] = [
    { title: '' },
    { title: '' },
  ];
}
