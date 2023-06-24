function func (a, b) {
  let timer = setInterval(function () {
    console.log(a++);
    if (a === b+1)
       clearInterval(timer);
  }, 1000);
}

func (5, 15);