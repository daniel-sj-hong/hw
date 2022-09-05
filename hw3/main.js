// question 1

const q1 = (x) => {
  let result = '';
  const str = x.toString();
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }
  const finalResult = parseInt(result)
  return finalResult;
}

// question 2

const q2 = (s) => {
  return s === s.split("").reverse().join("")
}

// question 3

const q3 = (str) => {
  const combos = [];
  for (let i = 0; i < str.length; ++i) {
    for (let j = i + 1; j <= str.length; ++j) {
      combos.push(str.slice(i, j));
    }
  }
  return combos;
}

// question 4

const q4 = (s) => {
  return s.split("").sort().join("")
}

// question 5

const q5 = () => {
  return s.split(" ").map((str) => str[0].toUpperCase() + str.slice(1)).join(" ")
}

// question 6

const q6 = (s) => {
  let words = s.split(" ")
  let res = words[0]
  let max_len = words[0].length
  words.forEach((word) => {
    if (word.length > max_len) {
      res = word
      max_len = word.length
    }
  })
  return res
}

// question 7

const q7 = (s) => {
  const vowels = ['a', 'e', 'u', 'i', 'o']
  const letters = s.split("")
  let ctr = 0
  letters.forEach((letter) => {
    if (vowels.includes(letter)) {
      ctr += 1
    }
  })
  return ctr
}

// question 8

const q8 = (num) => {
  if (num === 1) {
    return false
  } else if (num === 2) {
    return true
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}

// question 9

const q9 = (x) => {
  return typeof x
}

// question 10

const q10 = (n) => {
  const res = []
  for (let i = 0; i < n; i++) {
    const row = []
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1)
      } else {
        row.push(0)
      }
    }
    res.push(row)
  }
  return res
}

// question 11

const q11 = (arr) => {
  sorted = arr.sort((a, b) => a - b);
}

// question 12

const q12 = (num) => {
  let divisorSum = 0;
  for (let i = 0; i <= num; ++i) {
    if (num % i === 0) {
      divisorSum += i;
    }
  }
  return divisorSum / 2 === nu
}

// question 13

const q13 = (num) => {
  const factors = [];
  for (let i = 0; i <= num; ++i) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// question 14

const q14 = (x, coins) => {
  let ret = [];
  for (let i of coins) {
    while (x >= i) {
      x = x - i;
      ret.push(i);
    }
  }
  return ret;
}

// question 15

const q15 = (b, n) => {
  let res = 1
  for (var i = 0; i < n; i++) {
    res = b * res
  }
  return res
}

// question 16

const q16 = (str) => {
  const firstLetters = new Set();
  const uniques = [];

  for (const letter of str.split('')) {
    if (firstLetters.has(letter)) continue;

    firstLetters.add(letter);
    uniques.push(letter);
  }

  return uniques.join('');
}

// question 17

const q17 = (x) => {
  let count = {};
  for (let i of x) {
    if (count[i]) {
      count[i] = count[i] + 1;
    } else {
      count[i] = 1;
    }
  }
  return count;
}

// question 18

const q18 = (x, goal) => {
  let lo = 0;
  let hi = x.length - 1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (x[mid] === goal) {
      return mid;
    } else if (x[mid] < goal) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
}

// question 19

const q19 = (x, num) => {
  let arr = [];
  for (let i of x) {
    if (i > num) {
      arr.push(i);
    }
  }
  return arr;
}

// question 20

const q20 = (length) => {
  const id = [];
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678";
  for (let i = 0; i < length; ++i) {
    const pick = Math.round(Math.random() * options.length);
    id.push(options[pick]);
  }
  return id.join('');
}

// question 21

const q21 = (arr, arr_size) => {
  let result_set = [],
    result;

  for (let x = 0; x < Math.pow(2, arr.length); x++) {
    result = [];
    i = arr.length - 1;
    do {
      if ((x & (1 << i)) !== 0) {
        result.push(arr[i]);
      }
    } while (i--);

    if (result.length >= arr_size) {
      result_set.push(result);
    }
  }

  return result_set;
}

// question 22

const q22 = (str, letter) => {
  str.split('').filter(l => l === letter).length;
}

// question 23

const q23 = (x) => {
  for (let i of x) {
    let temp = x.replace(i, '');
    if (temp.includes(i) === false) {
      return i;
    }
  }
  return -1;
}

// question 24

const q24 = (x) => {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x.length - i - 1; j++) {
      if (x[j] < x[j + 1]) {
        let temp = x[j];
        x[j] = x[j + 1];
        x[j + 1] = temp;
      }
    }
  }
  return x;
}

// question 25

const q25 = (countries) => {
  countries.reduce((m, c) => m?.length > c.length ? m : c, null);
}

// question 26

const q26 = (str) => {
  let ret = '';
  let sub = '';
  for (let i of x) {
    if (ret.includes(i) === false) {
      sub += i;
      if (sub.length > ret.length) {
        ret = sub;
      }
    } else {
      let cut = sub.indexOf(i);
      sub = sub.substring(cut + 1) + i;
    }
  }
  return ret;
}

// question 27

const q27 = () => {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
}

// question 28

const q28 = (x) => {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (x(item, i, this)) {
      result.push(item);
    }
  }

  return result;
}

// question 29

const q29 = (function) => {
  function.name
}
