import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void printMenu() {
        System.out.println("-----------------------------------");
        System.out.println("1. list all books");
        System.out.println("2. add a new book");
        System.out.println("3. edit book");
        System.out.println("4. delete a book");
        System.out.println("5. search books by name");
        System.out.println("6. sort books descending by price");
        System.out.println("");
        System.out.println("0. save & exit");
        System.out.println("-----------------------------------");
        System.out.print("Your option: ");
    }

    public static void main(String[] args) {
        BookManager bookManager = new BookManager();

        bookManager.loadFromFile();

        // ArrayList<Book> books = bookManager.getBooks();

        // bookManager.printBooks(books);

        // printMenu();
        Scanner in = new Scanner(System.in);
        String input;

        do {
            printMenu();
            input = in.nextLine();

            int option = Integer.parseInt(input);

            if (option > 7) {
                System.out.println("Invalid option!");
                continue;
            }

            switch (option) {
                case 1:
                    ArrayList<Book> books = bookManager.getBooks();
                    if (books.size() > 0) {
                        System.out.printf("%-5s %-45s %-10s\n", "ID", "Name", "Price");
                    }
                    bookManager.printBooks(books);
                    break;

                case 2:
                    System.out.print("Enter book id: ");
                    int addBookID = Integer.parseInt(in.nextLine());
                    System.out.print("Enter book name: ");
                    String addBookName = in.nextLine();
                    System.out.print("Enter book price: ");
                    double addBookPrice = Double.parseDouble(in.nextLine());

                    Book newBook = new Book(addBookID, addBookName, addBookPrice);

                    if (bookManager.add(newBook)) {
                        System.out.println("Added successfully.");
                    } else {
                        System.out.println("Duplicated ID!");
                    }
                    break;

                case 3:
                    System.out.print("Enter book id: ");
                    int editBookID = Integer.parseInt(in.nextLine());
                    System.out.print("Enter book name: ");
                    String editBookName = in.nextLine();
                    System.out.print("Enter book price: ");
                    double editBookPrice = Double.parseDouble(in.nextLine());

                    Book existedBook = bookManager.getBookById(editBookID);

                    if (existedBook == null) {
                        System.out.println("Invalid ID!");
                    } else {
                        existedBook.setName(editBookName);
                        existedBook.setPrice(editBookPrice);
                        System.out.println("Updated successfully.");
                    }
                    break;

                case 4:
                    System.out.print("Enter book id: ");
                    int deleteBookID = Integer.parseInt(in.nextLine());
                    Book aboutToDeleteBook = bookManager.getBookById(deleteBookID);

                    if (aboutToDeleteBook == null) {
                        System.out.println("Invalid ID!");
                    } else {
                        bookManager.remove(aboutToDeleteBook);
                        System.out.println("Deleted successfully.");
                    }
                    break;

                case 5:
                    System.out.print("Enter keyword: ");
                    String keyword = in.nextLine();
                    ArrayList<Book> searchedBooks = (ArrayList<Book>) bookManager.searchByName(keyword);
                    bookManager.printBooks(searchedBooks);
                    break;

                case 6:
                    bookManager.sortDescByPrice();
                    break;

                case 0:
                    bookManager.saveToFile();
                    System.out.println("Bye!");
                    break;

                default:
                    break;
            }
        } while (Integer.parseInt(input) != 0);

        in.close();
    }
}