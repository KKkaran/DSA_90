function generateAnagrams(word) {
  // Helper function to recursively generate anagrams
  function generateAnagramsRecursive(current, remaining) {
    if (remaining.length === 0) {
      console.log("empty remaining", current);
        anagrams.push(current);
        console.log(anagrams)
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      const newCurrent = current + remaining[i];
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        console.log('\nnewCurrent', newCurrent);
        console.log('newRemaining', newRemaining)
      generateAnagramsRecursive(newCurrent, newRemaining);
    }
  }

  // Main function
  const anagrams = [];
  generateAnagramsRecursive("", word);

  return anagrams;
}

// Example usage
const inputWord = "car";
const result = generateAnagrams(inputWord);
console.log(`Anagrams of '${inputWord}':`, result);
