// Клас для опису книги
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    // Метод для виведення короткої інформації про книгу
    getInfo() {
        return `${this.title} написана ${this.author} і містить ${this.pages} сторінок.`;
    }
}

// Клас для опису користувача
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Метод для виведення вітального повідомлення
    greet() {
        return `Привіт, ${this.name}! Ваш вік: ${this.age}, ваш email: ${this.email}.`;
    }
}

// Клас для опису бібліотеки
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Метод для додавання книги до бібліотеки
    addBook(book) {
        this.books.push(book);
    }

    // Метод для виведення списку всіх книг у бібліотеці
    showBooks() {
        if (this.books.length === 0) {
            return `${this.name} поки що не має книг.`;
        }
        return `${this.name} містить такі книги:\n` + this.books.map(book => book.getInfo()).join('\n');
    }
}

// Приклад використання
const book1 = new Book("Мистецтво війни", "Сунь-Цзи", 300);
const book2 = new Book("1984", "Джордж Орвелл", 328);

const user1 = new User("Олена", 25, "olena@example.com");

const library = new Library("Міська бібліотека");
library.addBook(book1);
library.addBook(book2);

console.log(user1.greet()); // Привітання для користувача
console.log(library.showBooks()); // Виведення списку книг у бібліотеці
