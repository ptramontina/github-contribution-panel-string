const AWS = require('aws-sdk');
const kms = new AWS.KMS();

const decrypted = {};

exports.decrypt = async (secretName, functionName) => {
  if (decrypted[secretName]) {
    return decrypted[secretName];
  }

  const req = { 
    CiphertextBlob: Buffer.from(process.env[secretName], 'base64'),
    EncryptionContext: { LambdaFunctionName: functionName }
  };
  
  const data = await kms.decrypt(req).promise();
  const decryptedVal = data.Plaintext.toString('ascii');

  decrypted[secretName] = decryptedVal;
  return decryptedVal;
}

exports.charMap = {
  'a': [],
  'b': [],
  'c': [],
  'd': [1, 2, 3, 4, 5, 8, 12, 16, 17, 18],
  'e': [1, 2, 3, 4, 5, 8, 10, 12, 15, 17, 19],
  'f': [],
  'g': [],
  'h': [],
  'i': [],
  'j': [],
  'k': [],
  'l': [],
  'm': [],
  'n': [],
  'o': [1, 2, 3, 4, 5, 8, 12, 15, 16, 17, 18, 19],
  'p': [1, 2, 3, 4, 5, 8, 10, 15, 16, 17],
  'q': [],
  'r': [1, 2, 3, 4, 5, 8, 11, 16, 17, 19],
  's': [],
  't': [],
  'u': [],
  'v': [],
  'w': [],
  'x': [],
  'y': [],
  'z': []
}
