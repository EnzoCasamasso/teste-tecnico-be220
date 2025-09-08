import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AuthService } from '@features/auth/services/auth.service';
import { LoadingService } from '@shared/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [CommonModule, IonicModule, RouterModule, FormsModule]
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  protected loadingService = inject(LoadingService);

  email = model('admin@admin.com');
  password = model('123456');
  error = signal('');

  async login() {
    this.error.set('');
    this.loadingService.start();
    try {
      await this.auth.signIn(this.email(), this.password());
      this.router.navigateByUrl('/home');
    } catch (e: any) {
      this.error.set(e?.message ?? 'Falha ao entrar');
    } finally {
      this.loadingService.stop();
    }
  }
}
