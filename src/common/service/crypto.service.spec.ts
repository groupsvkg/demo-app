import { Test, TestingModule } from '@nestjs/testing';
import { CryptoService } from './crypto.service';
import { BadRequestException } from '@nestjs/common';

describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    service = module.get<CryptoService>(CryptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('encrypt', () => {
    describe('when valid encryption key and textToEncrypt exists', () => {
      it('should return the encrypted text', () => {
        const key = "f01677a424e9ef52d7e48fff42c058773ef0e091d73557a14815ee5e749c76a8:dbed13f61ff2b4730ef147b441b4b580";
        const textToEncrypt = "hello";

        const expectedText = 'ea9b46a63d';

        const encryptedText = service.encrypt(key, textToEncrypt);

        expect(encryptedText).toEqual(expectedText);
      });
    });

    describe('otherwise', () => {
      it('should throw BadRequestException for invalid key', () => {
        const key = "invalid key"
        const textToEncrypt = "hello";

        try {
          service.encrypt(key, textToEncrypt);
        } catch (error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Invalid encryption key: ${key}`);
        }

      });
    })
  });


  describe('decrypt', () => {
    describe('when valid decryption key and encryptedText exists', () => {
      it('should return the decrypted text', () => {
        const key = "f01677a424e9ef52d7e48fff42c058773ef0e091d73557a14815ee5e749c76a8:dbed13f61ff2b4730ef147b441b4b580";
        const encryptedText = "a0964fa63e2bfd";

        const expectedText = '\"hello\"';

        const decryptedText = service.decrypt(key, encryptedText);

        expect(decryptedText).toEqual(expectedText);
      });
    });

    describe('otherwise', () => {
      it('should throw BadRequestException for invalid key', () => {
        const key = "invalid key"
        const encryptedText = "a0964fa63e2bfd";

        try {
          service.decrypt(key, encryptedText);
        } catch (error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error.message).toEqual(`Invalid decryption key: ${key}`);
        }

      });
    })
  });

});
