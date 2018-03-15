export const randomNumberLessThan = (max = 100) => Math.floor(Math.random() * max);

const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const letters = '1234567890';
const special = '!@#$%^&*()-_=+';

export function createRandomStringGenerator(options = {}) {
  const { includeCaps, includeLetters, includeSpecial, length = 10 } = options;

  let alphabet = lowercase;

  if (includeCaps) {
    alphabet += uppercase;
  }

  if (includeLetters) {
    alphabet += letters;
  }

  if (includeSpecial) {
    alphabet += special;
  }

  const alphabetLength = alphabet.length;

  return () => {
    let results = '';

    for (let i = 0; i < length; i++) {
      let position = randomNumberLessThan(alphabetLength);
      results += alphabet.charAt(position);
    }

    return results;
  };
}

export const randomString = createRandomStringGenerator({
  includeCaps: true,
  includeLetters: true
});
