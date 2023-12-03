const { createCipheriv, randomBytes, scrypt } = require('crypto');
const { promisify } = require('util');


async function generateKey() {
    const iv = randomBytes(16);
    const password = 'Password used to generate key';

    let key = (await promisify(scrypt)(password, 'salt', 32));
    const cipher = createCipheriv('aes-256-ctr', key, iv);

    const textToEncrypt = 'Hello World';
    const encryptedText = Buffer.concat([
        cipher.update(textToEncrypt),
        cipher.final(),
    ]);

    return `${key.toString('hex')}:${iv.toString('hex')}`;
}

generateKey().then(key => console.log(`Key: ${key}`));