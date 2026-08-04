import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const TAG_LENGTH = 16;

/**
 * Gets a 32-byte key derived from CUSTOM_HASHING_SALT in the environment.
 */
function getKey() {
  const secret = process.env.CUSTOM_HASHING_SALT;
  if (!secret) {
    throw new Error('CUSTOM_HASHING_SALT environment variable is not set');
  }
  // Use a hash to ensure the key is always 32 bytes (256 bits) for aes-256
  return crypto.createHash('sha256').update(String(secret)).digest();
}

/**
 * Encrypts a string using AES-256-GCM.
 * @param {string} text - The plaintext to encrypt.
 * @returns {string|null} - The encrypted string (base64 encoded format: iv:tag:encrypted), or null if input is empty.
 */
export function encrypt(text) {
  if (!text) return null;
  
  const key = getKey();
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  const tag = cipher.getAuthTag();
  
  return `${iv.toString('base64')}:${tag.toString('base64')}:${encrypted}`;
}

/**
 * Decrypts a string using AES-256-GCM.
 * @param {string} hash - The encrypted string format from encrypt().
 * @returns {string|null} - The original plaintext, or null if decryption fails or input is empty.
 */
export function decrypt(hash) {
  if (!hash) return null;
  
  try {
    const parts = hash.split(':');
    if (parts.length !== 3) return hash; // Not encrypted with this function (fallback for existing data)
    
    const [ivStr, tagStr, encryptedStr] = parts;
    const key = getKey();
    const iv = Buffer.from(ivStr, 'base64');
    const tag = Buffer.from(tagStr, 'base64');
    
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(tag);
    
    let decrypted = decipher.update(encryptedStr, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    console.error('Decryption failed:', error);
    return null; // Return null or the original string depending on fallback preference
  }
}
