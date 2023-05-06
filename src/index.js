const fetchTopBooks = async () => {
    const response = await fetch("https://books-backend.p.goit.global/books/top-books");
    const topBooks = await response.json();
    return topBooks;
  };
  
  const getListTopBooks = async () => {
    try {
      const topBooks = await fetchTopBooks();
      console.log(topBooks);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  getListTopBooks();