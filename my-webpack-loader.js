module.exports = function myWebpackLoader(content){
  // console.log('myWebpackLoader가 작동함')
  
  //console을 alert으로 
  return content.replace('console.log(', 'alert(')
}