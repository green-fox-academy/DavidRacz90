

export class Sum {

  sum(numbers: number[]): number {
    let result: number = 0;
    numbers.forEach(e => {
      result += e;
    })
    return result;
  }
}



