import { Injectable } from '@angular/core';
import * as forge from 'node-forge';
@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  // Remplacez les clés RSA par vos propres clés pour une utilisation en production
  private publicKey = `-----BEGIN PUBLIC KEY-----
  MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHyq8Bkx+ONf7tOTPtYevoRINNPm
  ++7Wlo8sxBoRLrB9LxsBRkFI2EquBFBWgxaLaAmQdSfsF/SbW9OOtAl2EUEmsulz
  IBOaDeiM/4pi9lvn0BNMSJubkSJjEq7KmXX1ZhOWoAVRzb4L6iAV5zSmPKHVB1op
  Mt+NnmxaSnNJfc4TAgMBAAE=
  -----END PUBLIC KEY-----`; // Insérez votre clé publique RSA ici
  private privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIICWgIBAAKBgHyq8Bkx+ONf7tOTPtYevoRINNPm++7Wlo8sxBoRLrB9LxsBRkFI
  2EquBFBWgxaLaAmQdSfsF/SbW9OOtAl2EUEmsulzIBOaDeiM/4pi9lvn0BNMSJub
  kSJjEq7KmXX1ZhOWoAVRzb4L6iAV5zSmPKHVB1opMt+NnmxaSnNJfc4TAgMBAAEC
  gYAeNqNHx+ek21wbJKVm6T6M+p7q+CD4ikMk4dmI478oAL7I0a9AJTJeLvxWqBDP
  Buwo3Ty3dy17F6fShtQ1MssNYovK5GJfYGh9YEFQrc4bJ8ArgvR72ZtQhKjR3HUd
  Bc53obkK5Zd7eRrDddn9/bLLu22fFM4OC9LRksgtQ1zb2QJBAM+j+/8NCNRMcUGs
  2MZgKc8nlJDgYTtiujfQ7HJsVXA8K7EH0a+1sr19jSWSbE3u8FUIrB/qY4Y5rOV2
  lXn3v10CQQCZs+tGT77s5F1ZPNrreJJawJZHOst/3ciJwB1jyBOQDS0/uxpdw6JF
  3JmiR/zQRa0D/pMtUgt2tKdh+UZ4qZwvAkAyLsC1iJHstTjeFYcikpUoMrmuNfxp
  3NeCq+SpVtNjV7d7hpc/7xruvwxA211/jFLbSkhHQl+hTgkiQAGqQ50lAkAvSRy+
  mtYABxl41LH88zEDXnBdJYdppQ+G4WWpRupNzN/41VT9N6x6la1mMYNjh6v8qJsa
  vDzunhFIoOm/QV7dAkAsS+FzsUp7uS20Lv6r2WU9n9zPHsuxIOJ0JMw91NuL6xId
  UNrB8XlFhqfJTDmpyGQuBWfxIvW948HAmSWC0z6k
  -----END RSA PRIVATE KEY-----`; // Insérez votre clé privée RSA ici

  // public encrypt(text: string): string {
  //   const encryptedData = publicEncrypt(this.publicKey, Buffer.from(text));
  //   return encryptedData.toString('base64');
  // }

  // public decrypt(encryptedText: string): string {
  //   const encryptedData = Buffer.from(encryptedText, 'base64');
  //   const decryptedData = privateDecrypt(this.privateKey, encryptedData);
  //   return decryptedData.toString();
  // }
}
