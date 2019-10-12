import crypto from 'crypto-js';

const paskey = 'xuncexcxonemiyao';  // 16位字符串

export const aesEncrypt = (pas, key = paskey) => {
  // 把Key转换为wordArray对象
  const Utf8Key = crypto.enc.Utf8.parse(key)
  /**
     * CipherOption, 加密的一些选项:
     *   mode: 加密模式, 可取值(CBC, CFB, CTR, CTRGladman, OFB, ECB), 都在 CryptoJS.mode 对象下
     *   padding: 填充方式, 可取值(Pkcs7, AnsiX923, Iso10126, Iso97971, ZeroPadding, NoPadding), 都在 CryptoJS.pad 对象下
     *   iv: 偏移量, mode === ECB 时, 不需要 iv
     * 返回的是一个加密对象
     */
  const cipher = crypto.AES.encrypt(pas, Utf8Key, {
    mode: crypto.mode.ECB,
    padding: crypto.pad.Pkcs7,
    iv: ''
  });
  //  将加密后的数据转换成 Base64
  const base64Cipher = cipher.ciphertext.toString(crypto.enc.Base64);
  //  返回加密后的经过处理后的字符串
  return base64Cipher
}

export const aesDecrypt = (pas, key = paskey) => {
  const Utf8Key = crypto.enc.Utf8.parse(key)
  //  这里 mode, padding, iv 一定要跟加密的时候完全一样
  //  返回的是一个解密后的对象
  const decipher = this.$CryptoJS.AES.decrypt(pas, Utf8Key, {
    mode: crypto.mode.ECB,
    padding: crypto.pad.Pkcs7
  });
  //  将解密对象转换成 UTF8 的字符串
  const resultDecipher = crypto.enc.Utf8.stringify(decipher);
  //  返回解密结果
  return resultDecipher;
}