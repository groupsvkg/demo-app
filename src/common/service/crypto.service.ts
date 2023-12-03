import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

@Injectable()
export class CryptoService {
    encrypt(combinedKey: string, textToEncrypt: string) {
        try {
            const [key, iv] = combinedKey.split(':');

            if (!key || !iv) throw new BadRequestException(`Invalid encryption key: ${combinedKey}`);

            const cipher = createCipheriv('aes-256-ctr', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));

            const encryptedText = Buffer.concat([
                cipher.update(textToEncrypt),
                cipher.final(),
            ]);

            return encryptedText.toString('hex');
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    decrypt(combinedKey: string, encryptedText: string) {
        try {
            const [key, iv] = combinedKey.split(':');

            if (!key || !iv) throw new BadRequestException(`Invalid decryption key: ${combinedKey}`);

            const decipher = createDecipheriv('aes-256-ctr', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));

            const decryptedText = Buffer.concat([
                decipher.update(Buffer.from(encryptedText, 'hex')),
                decipher.final(),
            ]);

            return decryptedText.toString();
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
