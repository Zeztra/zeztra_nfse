import { CertificateService } from '@application/services/certificate';

export class CertificateFactory {
  static get service(): CertificateService {
    return new CertificateService();
  }
}
