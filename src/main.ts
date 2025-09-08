import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar, Style } from '@capacitor/status-bar';

import { environment } from './environments/environment';

import { register } from 'swiper/element/bundle';

import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  notificationsOutline, 
  notificationsSharp, 
  mailOutline, 
  mailSharp, 
  paperPlaneOutline, 
  paperPlaneSharp, 
  heartOutline, 
  heartSharp, 
  archiveOutline, 
  archiveSharp, 
  trashOutline, 
  trashSharp, 
  warningOutline, 
  warningSharp, 
  bookmarkOutline, 
  bookmarkSharp, 
  homeSharp, 
  notificationsCircleSharp,
  addCircleOutline,
  accessibilityOutline,
  trophyOutline,
  logOutOutline
} from 'ionicons/icons';
addIcons({ 
  homeOutline, 
  notificationsOutline, 
  notificationsSharp, 
  mailOutline, 
  mailSharp, 
  paperPlaneOutline, 
  paperPlaneSharp, 
  heartOutline, 
  heartSharp, 
  archiveOutline, 
  archiveSharp, 
  trashOutline, 
  trashSharp, 
  warningOutline, 
  warningSharp, 
  bookmarkOutline, 
  bookmarkSharp, 
  homeSharp, 
  notificationsCircleSharp,  
  addCircleOutline,
  accessibilityOutline,
  trophyOutline,
  logOutOutline
 });

async function setupEdgeToEdge() {
  await EdgeToEdge.enable();
  await StatusBar.setOverlaysWebView({ overlay: true }); 
  await StatusBar.setStyle({ style: Style.Light });
}
setupEdgeToEdge();
register();

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    // provideFirestore(),
    provideStorage(() => getStorage()),
  ]
});