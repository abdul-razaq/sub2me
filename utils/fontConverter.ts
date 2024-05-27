export default function convertFontValueToNumber(font: string) {
  return Number(font.replace(/\D+/g, ''));
}
