export const hashtags = (text) => {
  let hashtagWords = []
  let words = text.split(' ')
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith('#')) {
      hashtagWords.push(words[i])
    } 
  }
  return hashtagWords
}
