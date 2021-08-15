const units = {
  0: 'zero',
  1: 'one', 
  2: 'two', 
  3: 'three', 
  4: 'four', 
  5: 'five', 
  6: 'six', 
  7: 'seven', 
  8: 'eight', 
  9: 'nine'
}

const tens = {
  10: 'ten', 
  20: 'twenty', 
  30: 'thirty', 
  40: 'fourty', 
  50: 'fifty', 
  60: 'sixty', 
  70: 'seventy', 
  80: 'eighty', 
  90: 'ninety'
}

const elevens = {
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}

function convertNumberToString (m) {
  if (m <= 9) {
    return units[m];
  }
  if (m % 10 == 0) {
    return tens[m]
  }
  if (m >= 11 && m <= 19) {
    return elevens[m]
  }
  if (m >= 21 && m <= 99) {
    let ten = Math.trunc(m / 10) * 10;
    let unit = m - ten;
    return tens[ten] + ' ' + units[unit];
  }
}


module.exports = function toReadable(n) {
  if (n < 100) {
    return convertNumberToString(n);
  }

  if (n >= 100 && n <= 999) {
    if (n % 100 == 0) {
      return units[n / 100] + ' hundred';
    } else {
      let remain = n - Math.trunc(n / 100) * 100;
      return units[Math.trunc(n / 100)] + ' hundred ' + convertNumberToString(remain);
    }
  }

  return 'The number is too much'

}

