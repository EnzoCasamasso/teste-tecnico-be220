import { computed, inject, Injectable } from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from "@angular/router";

import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    User,
    user,
  } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private auth = inject(Auth);
    private router = inject(Router);
  
    authState = toSignal<User | null>(user(this.auth), { initialValue: null });
  
    isLoggedIn = computed(() => !!this.authState());
    uid = computed(() => this.authState()?.uid ?? null);
    email = computed(() => this.authState()?.email ?? null);
  
    signUp(email: string, password: string) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
  
    signIn(email: string, password: string) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }
  
    async signOut() {
      await firebaseSignOut(this.auth);
      await this.router.navigateByUrl('/auth');
    }
}