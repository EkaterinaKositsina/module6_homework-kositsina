function func (a){
  
  return function Sum(b){
    result = a + b;
    return console.log(result);
  }
}

func(2)(4);