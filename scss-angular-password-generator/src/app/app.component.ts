import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public password = '';

  getPassword() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const capitalCharacters = [...characters].map(char => char.toUpperCase()).join('');
    const numbers = '0123456789';
    const specialCharacters = '!"#$%&\'()*+-/:<=>?@[\]^_\`{|}~';
    
    const chars = `${numbers}${specialCharacters}${characters}${capitalCharacters}`;
    const passwordLength = 16;
    let password = '';

    for (let i = 0; i<passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substr(randomNumber, 1);
    }
    this.password = password;
  }
}
