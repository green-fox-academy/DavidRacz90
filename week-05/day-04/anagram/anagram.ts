
export function anagram(stringA: string, stringB: string): boolean {
  stringA.toLowerCase().split('').sort().join('').trim();
  stringB.toLowerCase().split('').sort().join('').trim();
  if(stringA === stringB) {
    return true;
  } else {
    return false;
  }
}

