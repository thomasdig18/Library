//Created the myLibrary array
const myLibrary = [];

//Contructor for object Book
function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread; 

}

//Function that pushes the inputs to myLibrary array 
function addBookToLibrary(title, author, pages, isread) {
  let newBook = new Book(title, author, pages, isread);
  myLibrary.push(newBook);
}


// This creates the add button variable and performs the addBookToLibrary function
// when it is clicked
const addbtn = document.querySelector("#add-button");
addbtn.addEventListener("click", () => {
  addBookToLibrary;
})
