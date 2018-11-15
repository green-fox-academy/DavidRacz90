

// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function xToY(text: string) {

    if(text.indexOf('x') === -1) return text;

    return xToY(text.replace('x','y'));

}

console.log(xToY('extremly exhausting exams'));