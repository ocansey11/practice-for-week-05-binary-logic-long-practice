// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  let total = 0
  let hex = '0x'
  const base2 = 2

  if(typeof element == 'number' ){
    hex += element.toString(16)

    return hex
  }

  if(typeof element == 'string'){
    // first convert to Base10
    let newArr = element.split('')
    if(newArr[0]== 0 && newArr[1] == 'b'){
      // check no other string appears within the values
      for(let i = 2; i < newArr.length; i++){
        if(!(newArr[i] === '1' || newArr [i] === '0')){
          throw TypeError("invalid binary value  : "  + newArr[i])
        }
      }

      for(let i = newArr.length - 1; i > 1; i--){
        let power = (newArr.length-1) - i
        let value  = parseInt(newArr[i])

        total += (base2 ** power) * value
      }
      // convert to base16
      hex += total.toString(16)
      return hex
    }
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
