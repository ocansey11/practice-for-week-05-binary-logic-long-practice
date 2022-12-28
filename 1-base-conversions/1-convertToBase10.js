// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  // check str[0] && str[1] are '0' x 'b' respectively
  let newArr = str.split('')
  let total = 0
  const base2 = 2
  const base16 = 16

  if(newArr[0]== 0 && newArr[1] == 'b'){
    // check no other string appears within the values
    for(let i = 2; i < newArr.length; i++){
      if(!(newArr[i] === '1' || newArr [i] === '0')){
        throw TypeError("invalid binary value  : "  + newArr[i])
      }
    }

    for(let i = newArr.length - 1; i > 1; i--){
      let power = newArr.length - i
      let value  = parseInt(newArr[i])

      total += (base2 ** power) * value
      console.log((base2 ** power) * value)
    }
    return total
  }

  // check str[0] && str[1] are '0' or 'x' respectively to test for hex

  else{
    throw TypeError("value must begin with '0b' to show its a binary")
  }
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
