// jshint esversion:6
function factorialize(num) {
  if (num === 0) return 1;
  for (let i = num-1; i > 0; i--) {
    num *= i;
  }
  return num;
}

factorialize(0);
