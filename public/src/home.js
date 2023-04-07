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
  let commonGenres = {};
  books.forEach((book)=> {
    const genre = book.genre;
    if(commonGenres[genre]){
     commonGenres[genre]++ 
    }else{
      commonGenres[genre]=1
    }
    
  })
  console.log(commonGenres)
  let newArray = []
  for(let name in commonGenres){
   newArray.push({name, count:commonGenres[name]}) 
  }
  return newArray.sort((a,b)=> b.count -a.count).slice(0,5)
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}
 

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
