const ALPHABET = " abcdefghijklmnopqrstuvwxyz,æøå():;-.";

export function packWords(str) {
  str = str.toLowerCase();
  let binary = '';
    for (let i = 0; i < str.length; i += 3) {

    let v1 = Math.max(0, ALPHABET.indexOf(str[i]));
    let v2 = Math.max(0, ALPHABET.indexOf(str[i+1] || ' '));
    let v3 = Math.max(0, ALPHABET.indexOf(str[i+2] || ' '));

    let combined = (v1 << 10) | (v2 << 5) | v3;

    binary += String.fromCharCode((combined >> 8) & 255, combined & 255);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function unpackWords(b64) {
  let padded = b64.replace(/-/g, '+').replace(/_/g, '/');
  while (padded.length % 4) padded += '=';

  let binary = atob(padded);
  let out = '';
  for (let i = 0; i < binary.length; i += 2) {
    let combined = (binary.charCodeAt(i) << 8) | binary.charCodeAt(i+1);

    out += ALPHABET[(combined >> 10) & 31];
    out += ALPHABET[(combined >> 5) & 31];
    out += ALPHABET[combined & 31];
  }
  return out.trim();
}
