import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class BookManager {
    ArrayList<Book> books;
    private int idPosition = 1;
    private int namePosition = 6;
    private int pricePosition = 51;

    /**
     * This constructor initializes this.books as an empty list
     */
    public BookManager() {
        this.books = new ArrayList<Book>();
    }

    /**
     * This getter returns all books managed by this
     * 
     * @return
     */
    public ArrayList<Book> getBooks() {
        return this.books;
    }

    /**
     * This method reads the file books.txt, parses the data in the file to Book
     * objects and adds them to this.books.
     */
    public void loadFromFile() {
        System.out.println("Loading books...");

        try {
            File bookFile = new File("books.txt");
            Scanner myReader = new Scanner(bookFile);

            while (myReader.hasNextLine()) {
                String line = myReader.nextLine();
                String bookIDStr = line.substring(this.idPosition - 1, this.namePosition - 1).trim();
                String bookName = line.substring(this.namePosition - 1, this.pricePosition - 1).trim();
                String bookPriceStr = line.substring(this.pricePosition - 1).trim();

                int bookID = Integer.parseInt(bookIDStr);
                double bookPrice = Double.parseDouble(bookPriceStr);

                Book book = new Book(bookID, bookName, bookPrice);
                this.books.add(book);
            }

            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
        }
    }

    /**
     * This method accepts a list of Book objects as the argument and prints out the
     * Book details in required format by iterating the list. If the input list
     * books is empty, print “(empty)”
     * 
     * @param books
     */
    public void printBooks(ArrayList<Book> books) {
        int booksSize = books.size();

        if (booksSize <= 0) {
            System.out.println("(empty)");
        } else {
            for (int i = 0; i < booksSize; i++) {
                Book book = books.get(i);
                System.out.println(book.toString());
            }
        }
    }

    /**
     * This method accepts a Book object as an input argument and adds it to
     * this.books if book.id is not duplicated, then returns whether added or not
     * 
     * @param book
     * @return
     */
    public boolean add(Book book) {
        for (int i = 0; i < this.books.size(); i++) {
            Book b = books.get(i);
            if (b.id == book.id) {
                return false;
            }
        }

        this.books.add(book);
        return true;
    }

    /**
     * This method accepts an id of Book as input and returns the Book object from
     * this.books with the corresponding id.
     * 
     * @param id
     * @return
     */
    public Book getBookById(int id) {
        for (int i = 0; i < this.books.size(); i++) {
            Book b = books.get(i);
            if (id == b.id) {
                return b;
            }
        }
        return null;
    }

    /**
     * This method accepts a Book object as the argument and remove it from
     * this.books.
     * 
     * @param book
     */
    public void remove(Book book) {
        Iterator<Book> itr = this.books.iterator();
        while (itr.hasNext()) {
            Book b = itr.next();
            if (b.id == book.id) {
                itr.remove();
                return;
            }
        }
    }

    /**
     * This method modifies this.books to be sorted in the descending order of
     * price.
     */
    public void sortDescByPrice() {
        int position;
        Book temp;

        if (this.books.size() <= 0) {
            System.out.println("(empty)");
        } else {
            for (int i = 0; i < this.books.size(); i++) {
                position = i;
                for (int j = i + 1; j < this.books.size(); j++) {
                    if (this.books.get(j).price > this.books.get(position).price) {
                        position = j;
                    }
                }

                temp = this.books.get(position);
                this.books.set(position, this.books.get(i));
                this.books.set(i, temp);
            }
            System.out.println("After sorting:");
            this.printBooks(this.books);
        }
    }

    /**
     * This method accepts a keyword string as argument and returns the list of Book
     * objects whose name contains the keyword (IMPORTANT: case-insensitive)
     * 
     * @param keyword
     * @return
     */
    public List<Book> searchByName(String keyword) {
        List<Book> searchedBooks = new ArrayList<Book>(0);

        for (int i = 0; i < this.books.size(); i++) {
            Book b = books.get(i);
            if (Pattern.compile(Pattern.quote(keyword), Pattern.CASE_INSENSITIVE).matcher(b.name).find()) {
                searchedBooks.add(b);
            }
        }

        return searchedBooks;
    }

    /**
     * This method writes Book objects managed by this into the file books.txt in
     * the required format.
     */
    public void saveToFile() {
        try {
            FileWriter bookWriter = new FileWriter("books.txt");
            bookWriter.write("");
            for (int i = 0; i < this.books.size(); i++) {
                Book b = books.get(i);
                bookWriter.write(b.toString());
                bookWriter.write("\n");
            }
            bookWriter.close();
            System.out.println("Saving to file...");
        } catch (IOException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
    }
}
