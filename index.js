// Code your solutions in this fil
function writeCards(names,event){
    const new_arr=[];
    for(let i = 0 ; i < names.length ; i++){
        let msg = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        new_arr.push(msg);
    }
    return new_arr;
    }

function countDown(number) {
    let count = number;
    while (count >= 0) {
      console.log(count);
      count--;
    }
  }
  
  countDown(10);
