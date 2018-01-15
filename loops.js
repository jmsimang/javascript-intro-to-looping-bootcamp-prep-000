function forLoop(args) {
  for (let i = 0; i < 25; i++) {
    if (i == 1)
      args.push("I am 1 strange loop.")
    else
      args.push("I am ${i} strange loops.")
  }
  return args
}

function whileLoop(num) {
  while (num >= 0) {
    console.log(--num)
  }
  return "done"
}

function doWhileLoop(args) {
  
}