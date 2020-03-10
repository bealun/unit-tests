export const hackerSpeak = (words) => {

  words = words.replace(/s|S/g, "5")
  words = words.replace(/a|A/g, "4")
  words = words.replace(/e|E/g, "3")
  words = words.replace(/i|I/g, "1")
  words = words.replace(/o|O/g, "0")

  return words
}
