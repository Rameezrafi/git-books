 
function addBook() {
   const bookName = document.getElementById("bname").value;
   const author = document.getElementById("aut").value;
   const coverImg = document.getElementById("cover").value;

    if (localStorage.getItem(bookName)) {
       window.location = "index.html";
     alert("Book already present");
   } else {
     const book = { bookName, author, coverImg };
      localStorage.setItem(bookName, JSON.stringify(book));
      window.location = "index.html";
     alert("Book added successfully");
   }
}
function goToSearchPage() {
  window.location = "form.html";
}
function searchPage() {
  window.location = "search.html";
}

function bookSearch() {
  book_name = bn.value;

  if (book_name in localStorage) {
    const bookDetails = JSON.parse(localStorage.getItem(book_name));
    result.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${bookDetails.coverImg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Name: ${bookDetails.bookName}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Author Name: ${bookDetails.author}</li>
            </ul>
        </div>`;
  } else {
    result.innerHTML = `<h1 class="text-danger">Book Is Not Found</h1>`;
  }
}

