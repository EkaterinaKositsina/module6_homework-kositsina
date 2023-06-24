function determineEvenNumber (number){
  if (number >= 1000){
    console.log('данные неверны')
    } else if (number === 0 || number === 1) {
      console.log('число ' +number + ' не является ни четным ни составным')
      } else {
        let flag = true;
        for (i = 2; i < number; i++) {
          if (number % i === 0){
          flag = false;
            break;
           } 
        } if (flag === false) {
            console.log('число ' +number + ' не является простым числом')
          } else {
           console.log('число ' +number + ' является простым числом')
          }
      }
}
determineEvenNumber(7);