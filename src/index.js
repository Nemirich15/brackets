

module.exports = function check(str, bracketsConfig) {
  
  //const openBrackets = ['(', '{', '[', '|'];
  const bracketsConfig = [
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
    ['|', '|'],
  ];
  
  
  let stack = [];

  for( let i = 0; i < str.length; i++){
    let currentSymbol = str[i];

    //if(openBrackets.includes(currentSymbol)){
    for(let i = 0; i < bracketsConfig.length; i++){
      if(bracketsConfig[i][0].includes(currentSymbol)){
      stack.push(currentSymbol);
    } else {
      if(stack.length === 0) {
        return false;
      }
      let topElement =stack[stack.length - 1];

      

        if( bracketsConfig[i][0] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  
  
}
