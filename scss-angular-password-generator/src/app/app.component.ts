import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PasswordActions } from './actions/password.action';
import { AppState, AppStateModel } from './app.store';
import { Password } from './models/password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public password: Password;
  @Select(AppState.passwords)
  passwords$!: Observable<Password[]>;

  constructor(private store: Store) {
    this.password = {
      value: '',
      date: new Date(),
      coppied: false,
      id: 0,
    };
  }

  getPassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalCharacters = [...characters]
      .map((char) => char.toUpperCase())
      .join('');
    const numbers = '0123456789';
    const specialCharacters = '!"#$%&\'()*+-/:<=>?@[]^_`{|}~';

    const chars = `${numbers}${specialCharacters}${characters}${capitalCharacters}`;
    const passwordLength = 16;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substr(randomNumber, 1);
    }
    this.password = {
      id: Math.floor(Math.random() * 32000),
      date: new Date(),
      value: password,
      coppied: false,
    };

    this.store.dispatch(new PasswordActions.AddPassword(this.password));
  }

  removePassword(id: number) {
    this.store.dispatch(new PasswordActions.RemovePassword(id));
  }

  passwordCopied() {
    if (!!this.password) {
      this.store.dispatch(new PasswordActions.CopyPassword(this.password.id));
    }
  }
}
