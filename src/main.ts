import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import { StatusBar, Style } from '@capacitor/status-bar';
import { register } from 'swiper/element/bundle';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  notificationsSharp, 
  homeSharp, 
  notificationsCircleSharp,
  addCircleOutline,
  accessibilityOutline,
  trophyOutline,
  logOutOutline
} from 'ionicons/icons';
import { appConfig } from './app.config';
addIcons({ 
  homeOutline, 
  notificationsSharp, 
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

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
