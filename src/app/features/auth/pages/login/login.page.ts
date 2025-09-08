import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AuthService } from '@features/auth/services/auth.service';
import { LoadingService } from '@shared/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class LoginComponent {
  private auth = inject(AuthService);
  protected loadingService = inject(LoadingService);

  email = model('admin@admin.com');
  password = model('123456');
  error = signal('');

  async login() {
    this.error.set('');
    this.loadingService.start();
    try {
      await this.auth.signIn(this.email(), this.password());
    } catch (e: any) {
      this.error.set(e?.message ?? 'Falha ao entrar');
    } finally {
      this.loadingService.stop();
    }
  }
}
