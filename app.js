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


const display = document.querySelector(".display");

function addToDisplay() {
  display.innerHTML = "";
  
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    
    const div = document.createElement("div");
    div.classList.add("book");
    
    const titleP = document.createElement("p");
    titleP.innerHTML = `Title: ${book.title}`;
    div.appendChild(titleP);
    
    const authorP = document.createElement("p");
    authorP.innerHTML = `Author: ${book.author}`;
    div.appendChild(authorP);
    
    const pagesP = document.createElement("p");
    pagesP.innerHTML = `Pages: ${book.pages}`;
    div.appendChild(pagesP);
    
    const readP = document.createElement("p");
    readP.innerHTML = `Read: ${book.read}`;
    div.appendChild(readP);
    
    display.appendChild(div);
  }
}

addButton.addEventListener("click", function() {
  
  
  addToDisplay();
});

addToDisplay();