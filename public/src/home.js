function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(
    (book) =>
      book.borrows.filter((status) => status.returned === false).length > 0
  );
  return booksCheckedOut.length;
}

function getMostCommonGenres(books) {
  const commonGenres = books.reduce((genres, book) => {
    const genre = book.genre;
    if (genres[genre]) {
      genres[genre]++;
    } else {
      genres[genre] = 1;
    }
    return genres;
  }, {});

  console.log(commonGenres);
  let newArray = [];
  for (let name in commonGenres) {
    newArray.push({ name, count: commonGenres[name] });
  }
  return sortAndSlice(newArray)
  
}

function getMostPopularBooks(books) {
  const result = books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
    })
    return sortAndSlice(result)
   
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length;
      }
    });
    result.push(theAuthor);
  });
  
 return sortAndSlice(result)
}

function sortAndSlice(array){
  return array.sort((a, b) => b.count - a.count).slice(0, 5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
