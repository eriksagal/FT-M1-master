'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  var num_dec = 0;
  var num_str = num.toString();

  for(let i=0; i<num_str.length;i++)
  {
    num_dec += num_str[num_str.length-1-  i]*Math.pow( 2,i); 
    console.log(num_str[i])

  }

  return num_dec;
  
}

function DecimalABinario(num) {
  // tu codigo aca
  var num_bin = [];
  var num_bin_final = [];
  var binario=0;
  var num_str = num.toString();
  var resto=0;
  var cont = 0;
  while(1)
  {
    resto = num%2;
    num_bin.push(resto);
    num =Math.floor(num/2);
    
    console.log(num);
    if(num== 1 )
    {
      num_bin.push(1);
      break;
    }
    
    
  }

  for(let i=0;i<num_bin.length;i++)
  {
    num_bin_final[i]= num_bin[num_bin.length-i-1];
  }

  binario = num_bin_final.join('');

 
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}