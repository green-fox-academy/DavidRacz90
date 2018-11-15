// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function xToY(text: string) {

  if(text.indexOf('x') === -1) return text;

  return xToY(text.replace('x',''));

}

console.log(xToY('extremly exhausting exams'));