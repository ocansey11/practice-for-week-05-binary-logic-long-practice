// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  let total = 0
  let binary = '0b'
  const base16 = 16

  if(typeof element == 'number' ){
    binary += element.toString(2)

    return binary
  }

  if(typeof element == 'string'){
    let newArr = element.split('')
    // check str[0] && str[1] are '0' or 'x' respectively to test for hex
    if(newArr[0]== 0 && newArr[1] == 'x'){

      // check no other string appears within the values
      let hexValues = 'abcdefABCDEF0123456789'
      for(let i = 2; i < newArr.length; i++){
        if(!(hexValues.includes(newArr[i]))){
          throw TypeError("invalid hexadecimal value : "  + newArr[i])
        }
      }

      for(let i = newArr.length - 1; i > 1; i--){
        let power = (newArr.length-1) - i
        let value  = parseInt(newArr[i], 16)

        total += (base16 ** power) * value
      }
      return binary += total
    }
    else{
      throw TypeError("value must begin with 0x to show its a hexadecimal")
    }
  }
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
