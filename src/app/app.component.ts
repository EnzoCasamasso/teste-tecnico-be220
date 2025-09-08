import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuController } from '@ionic/angular/standalone';
import { AuthService } from '@features/auth/services/auth.service';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    RouterLink, 
    RouterLinkActive, 
    IonApp, 
    IonSplitPane, 
    IonMenu, 
    IonContent, 
    IonList, 
    IonListHeader, 
    IonNote, 
    IonMenuToggle, 
    IonItem, 
    IonIcon, 
    IonLabel, 
    IonRouterLink, 
    IonRouterOutlet,
    IonButton
  ],
})
export class AppComponent {
  protected authService = inject(AuthService);
  private menuService = inject(MenuController);
  
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
  ];

  logout() {
    this.menuService.close();
    this.authService.signOut();
  }
}
