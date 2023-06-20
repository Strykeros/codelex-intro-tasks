/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

// Custom data type
interface counts {
  [key: string]: number;
}

class Words {
  // Counts the occurrences of each word in a given string.
  count(str: string): counts {
    return str
      .trim()
      .toLowerCase()
      .split(/\s+/g)
      .reduce((countsResult, word) => {
        countsResult[word] = (countsResult[word] || 0) + 1;
        return countsResult;
      }, Object.create(null));
  }
}

export { Words };
