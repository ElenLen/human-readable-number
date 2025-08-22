module.exports = function toReadable(number) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundreds = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  if (number === 0) {
    return ones[0];
  }

  const parts = [];

  const hundred = Math.floor(number / 100);
  if (hundred > 0) {
    parts.push(hundreds[hundred]);
  }

  const remainder = number % 100;

  if (remainder >= 10 && remainder < 20) {
    parts.push(teens[remainder - 10]);
  } else {
    const ten = Math.floor(remainder / 10);
    if (ten > 0) {
      parts.push(tens[ten]);
    }
    const one = remainder % 10;
    if (one > 0) {
      parts.push(ones[one]);
    }
  }

  return parts.join(' ');
};
