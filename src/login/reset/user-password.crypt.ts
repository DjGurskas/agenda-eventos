import { createCipheriv, randomBytes, scrypt, scryptSync } from 'crypto';


const iv = randomBytes(16);
const password = 'Password used to generate key';
const key = scryptSync(password, 'GK', 32);
const cipher = createCipheriv('aes-256-ctr', key, iv);

const textToEncrypt = 'Hello World!';
const encryptedText = cipher.update(textToEncrypt, 'utf8', 'hex');








