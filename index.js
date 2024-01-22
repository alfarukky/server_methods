const http = require('http');

let books = ['book1', 'book2', 'book3', 'book4'];
const server = http.createServer((req, res) => {
  if (req.url === '/books' && req.method === 'GET') {
    res.write(
      `Book Colletion: There are ${books.length} books in the collection`
    );
    res.end();
  } else if (req.url === '/books' && req.method === 'PUT') {
    books[0] = 'book1.1';
    res.write('A book has been updated');
    res.end();
    console.log(books);
  } else if (req.url === '/books' && req.method === 'DELETE') {
    let oldBook = books.length;
    books.pop();
    res.write(
      `A book has been deleted,The number of books have reduces from ${oldBook} to ${books.length}.`
    );
    res.end();
  } else if (req.url === '/books/author' && req.method === 'GET') {
    res.write('Books colllection with author');
    res.end();
  } else if (req.url === '/books/author' && req.method === 'POST') {
    res.write('Author is added to book collection');
    res.end();
  } else if (req.url === '/books/author' && req.method === 'PUT') {
    res.write('Author has been updataed on book collection');
    res.end();
  }
});

server.listen(8000, null, null, () => {
  console.log('Server listening on port 8000');
});
