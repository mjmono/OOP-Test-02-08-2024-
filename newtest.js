class Book {
    constructor(name, author, yearOfPublication, publisher, placeOfPublication, availability) {
        this.name = name;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
        this.publisher = publisher;
        this.placeOfPublication = placeOfPublication;
        this.availability = availability;
    }

    displayAll() {
        console.log("Book Information:");
        console.log("Name: " + this.name);
        console.log("Author: " + this.author);
        console.log("Year of Publication: " + this.yearOfPublication);
        console.log("Publisher: " + this.publisher);
        console.log("Place of Publication: " + this.placeOfPublication);
        console.log("Availability: " + this.availability);
    }

    display(info) {
        const keys = Object.keys(this);
        console.log("Book Information:");
        for (const key of keys) {
            if (info.includes(key)) {
                let label = key.charAt(0).toUpperCase() + key.slice(1);
                console.log(label + ": " + this[key]);
            }
        }
    }

    // +++++++++++++++++++++++++++++++++++++    EDIT ++++++++++++++++++++++++++++++++++++++++

    change(info, value) {
        this[info] = value;
    }

}


// ++++++++++++++++++++++++++++++++++++++++++++++++++  LIBRARY +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayAll() {
        console.log("All Books:");
        for (const book of this.books) {
            book.displayAll();
            console.log("")
        }
    }

    display(book) {
        if (typeof (book) === 'number') {
            if (book >= this.books.length) {
                console.log("Book doesn't exist")
            } else {
                console.log(this.books[book]);
            }

        } else if (typeof (book) === 'string') {

            for (const i of this.books) {
                if (i.name === book) {
                    i.displayAll();
                    break;
                }
            }
            console.log("Book doesn't exist");
        }
    }
}



// let joshua = new Book(
//     "Dota",
//     "Riot",
//     2024,
//     "fdfdfdfd",
//     "Luzon",
//     true
// );

// let mark = new Book(
//     "fs",
//     "Risdfot",
//     20224,
//     "fdfdfsdfdfd",
//     "Luzon",
//     false
// );


// let library = new Library();
// library.addBook(joshua);
// library.addBook(mark);

// library.displayAll();
// console.log("_____________________________________________________________________________________");
// console.log("_____________________________________________________________________________________");
// console.log("_____________________________________________________________________________________")
// joshua.display(["name", "author"]);
// console.log("_____________________________________________________________________________________");
// console.log("_____________________________________________________________________________________");
// console.log("_____________________________________________________________________________________")
// library.displayAll();
// console.log("_____________________________________________________________________________________");
// console.log("_____________________________________________________________________________________");
// console.log("_____________________________________________________________________________________");
// library.display(1)