export function convertToSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '') // not a word or a space
    .replace(/ +/g, '-');
}

export function validateField(
  title: string | null,
  value: string,
  length: number
) {
  if (typeof value !== 'string' || value.length < length) {
    return `${title} should be at least ${length} characters long`;
  }
}

export function truncate(text: string, num: number) {
  return text.length > num ? text.substring(0, num - 1) + '... ' : text;
}

export function generateRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const generateRandomString = () => {
  return Math.random().toString(36).slice(2);
};
// return random generated string. ex. 6wz6iparaub

export const capitalize = (...words: string[]) => {
  return words
    .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
    .join(' ');
};
// capitalize('action') → Action
// capitalize(...'top_rated'.split('_')) → Top Rated
// capitalize(...'action_adventure'.replace('_', '_&_').split('_')) → Action & Adventure

export const removeSymbols = (str: string) => {
  return str.replace(/[^a-z0-9 ]/gi, '').trim();
};
// keep only characters, numbers, and spaces

// Function to emulate pausing between interactions
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
