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
  console.log(myLibrary);
}


// This creates the add button variable and performs the addBookToLibrary function
// when it is clicked
const addbtn = document.querySelector("#add-button");
addbtn.addEventListener("click", () => {
  
  const title = document.querySelector("#title-input").value;
  const author = document.querySelector("#author-input").value;
  const pages = document.querySelector("#pages-input").value;
  const isread = document.querySelector("#read-input").checked;

  addBookToLibrary(title, author, pages, isread);

  document.querySelector("#title-input").value = " ";
  document.querySelector("#author-input").value = " ";
  document.querySelector("#pages-input").value = "";
  document.querySelector("#read-input").checked = false;

});

//Figure out how to connect the inputs to the book object now
