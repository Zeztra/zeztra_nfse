import { NfseService } from '@application/services/nfse';

export class NfseFactory {
  static get service(): NfseService {
    return new NfseService();
  }
}
