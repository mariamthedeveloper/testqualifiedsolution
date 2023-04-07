function findAuthorById(authors, id) {
  let foundAuthors = authors.find((author) => author.id === id);
  return foundAuthors;
}

function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id);
  return foundBooks;
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
  );
  let borrowedBooks = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let bookStatusArray = [[...borrowedBooks], [...returnedBooks]];
 return bookStatusArray;
}


function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
