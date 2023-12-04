const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
const validBase64 =
  /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

export const base64Parser = (dataURL: string) => {
  if (typeof dataURL !== 'string' || !base64Regex.test(dataURL)) {
    return false;
  }

  const stringBase64 = dataURL.replace(base64Regex, '');

  if (!validBase64.test(stringBase64)) {
    throw new Error(
      'Error parsing base64 data, your data contains invalid characters',
    );
  }

  // For nodejs, return a Buffer
  if (typeof Buffer !== 'undefined' && Buffer.from) {
    return Buffer.from(stringBase64, 'base64');
  }

  // For browsers, return a string (of binary content) :
  const binaryString = window.atob(stringBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
};
