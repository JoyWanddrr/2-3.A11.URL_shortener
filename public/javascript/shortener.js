// 轉換接收的網址
function shortener(num) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = lowerCaseLetters + upperCaseLetters + numbers

  let randomNums = ''
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    randomNums += collection[randomIndex]
  }
  return randomNums
}



module.exports = shortener
