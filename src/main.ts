import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { CryptoService } from './crypto-service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <p>
      {{message}} 
    </p>
    <button>Crypt</button>
    <button>DeCrypt</button>
  `,
})
export class App {
  name = 'Angular';
  message = 'Learn more about Angular ';
  constructor(private cryptoService: CryptoService) {}

  // encryptData() {
  //   const dataToEncrypt = 'Hello, this is sensitive data!';
  //   const encryptedData = this.cryptoService.encrypt(dataToEncrypt);
  //   console.log('Encrypted Data:', encryptedData);
  // }

  // decryptData() {
  //   const encryptedData = '...'; // Replace with the encrypted data you want to decrypt
  //   const decryptedData = this.cryptoService.decrypt(encryptedData);
  //   console.log('Decrypted Data:', decryptedData);
  // }
}

bootstrapApplication(App);
