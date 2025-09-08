import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import {
  Auth, signInWithEmailAndPassword,
  signOut as firebaseSignOut, User, user
} from '@angular/fire/auth';
import { iUser } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  private authState = toSignal<User | null>(user(this.auth), { initialValue: null });

  currentUser = computed<iUser | null>(() => {
    const u = this.authState();
    return u ? { uid: u.uid, email: u.email } : null;
  });

  isLoggedIn = computed(() => this.currentUser() !== null);

  async signIn(email: string, password: string) {
    const payload = await signInWithEmailAndPassword(this.auth, email, password);
    await this.router.navigateByUrl('/home');
    return payload;
  }

  async signOut() {
    await firebaseSignOut(this.auth);
    await this.router.navigateByUrl('/auth');
  }
}
