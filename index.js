const smallestDivisor = (num) => {
  let i = 2;

  while (1 <= num / 2) {
    if (num % i === 0) {
      return i;
    }
    i = i + 1;
  }
  
  return 1;
}

