export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false,
  },
];

const showStatus = (libraryObj: any) => {
  for (let i = 0; i < libraryObj.length; i++) {
    let isRead = libraryObj[i].isRead;

    if (isRead === true) {
      let bookTitle = libraryObj[i].title;
      let bookAuthor = libraryObj[i].author;
      console.log(`Already read '${bookTitle}' by ${bookAuthor}.`);
    } else {
      let bookTitle = libraryObj[i].title;
      let bookAuthor = libraryObj[i].author;
      console.log(`You still need to read '${bookTitle}' by ${bookAuthor}.`);
    }
  }
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
