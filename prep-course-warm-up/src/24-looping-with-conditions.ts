export {};

function onlyTheAces(arr: string[]) {
  let acesArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === "ace") {
      acesArr.push(arr[i]);
    }
  }

  return acesArr;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
