export function countLetter(string: string) {

  return string.split("").reduce(function (obj, char) {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
  }, 
  {});
}


console.log(countLetter('cica'));

