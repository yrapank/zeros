module.exports = function getZerosCount(number) {
  let count=0;
  if( number<= 10^8 && number>=1){
    let num = number;
    for(let i=5;i<=number;i*=5){
        count+=Math.floor(num /i);  
    }
  }
  return count;
}