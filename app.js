function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  const myLibrary = [];
  
  const form = document.querySelector("#book-form");
  const addButton = document.querySelector("#add-button");
  
  addButton.addEventListener("click", function() {
    const titleInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const pagesInput = document.querySelector("#pages-input");
    const readInput = document.querySelector("#read-input");
    
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;
    
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
  });