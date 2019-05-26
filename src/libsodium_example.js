var tweetnacl = require('tweetnacl');
tweetnacl.util = require('tweetnacl-util');
tweetnacl.sealedbox = require('tweetnacl-sealedbox-js');

class libsodiumExample {
  static generateKeys () {
    var keyPair = tweetnacl.box.keyPair();
    keyPair.publicKey = tweetnacl.util.encodeBase64(keyPair.publicKey);
    keyPair.secretKey = tweetnacl.util.encodeBase64(keyPair.secretKey);
    return keyPair;
  }
  static encrypt (publicKey, encryptMe) {
    // Decode publicKey from base64
    var publicKeyBin = tweetnacl.util.decodeBase64(publicKey);
    // Encode encryptMe to UTF8
    var encryptMeUTF8 = (new TextEncoder("utf-8")).encode(encryptMe);
    // Encrypt
    var encryptedBin = tweetnacl.sealedbox.seal(encryptMeUTF8, publicKeyBin);
    // Encode encrypted to base64
    var encrypted = tweetnacl.util.encodeBase64(encryptedBin);
    return encrypted;
  }
  static decrypt (secretKey, decryptMe) {
    // Decode secretKey from base64
    var secretKeyBin = tweetnacl.util.decodeBase64(secretKey);
    // Get corresponding publicKey
    var publicKeyBin = tweetnacl.box.keyPair.fromSecretKey(secretKeyBin).publicKey;
    // Decode decryptMe from base64
    var decryptMeBin = tweetnacl.util.decodeBase64(decryptMe);
    // Decrypt
    var decryptedBin = tweetnacl.sealedbox.open(decryptMeBin, publicKeyBin, secretKeyBin);
    // Decode decrypted to UTF8
    var decryptedUTF8 = (new TextDecoder("utf-8")).decode(decryptedBin);
    return decryptedUTF8;
  }
}
export {
  libsodiumExample
};
