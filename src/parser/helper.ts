// export const escapeSequenceMapping = {
//   '\\a': 7,
//   '\\b': 8,
//   '\\e': 0x1b,
//   '\\f': 0x0c,
//   '\\n': 0x0a,
//   '\\r': 0x0d,
//   '\\t': 0x09,
//   '\\v': 0x0b,
//   '\\': 0x5c,
//   "\\'": 0x27,
//   '\\"': 0x22
// }

export const escapeSequenceMapping: { [seq: string]: string } = {
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t',
  '\\v': '\v',
  "\\'": "'",
  '\\"': '"',
  '\\': '\\'
}

export function evaluateEscapeSequences(text: string): string {
  for (const seq in escapeSequenceMapping) {
    text = text.replaceAll(seq, escapeSequenceMapping[seq])
  }
  return text
}
