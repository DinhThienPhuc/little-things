public class Book {
    int id;
    String name;
    double price;

    /**
     * This constructor is to create a new Book object from provided book details
     * 
     * @param id
     * @param name
     * @param price
     */
    public Book(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    /**
     * This setter updates this.name with provided value
     * 
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * This setter updates this.price with provided value
     * 
     * @param price
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * This method returns string representation of this Book in the required
     * format. Refer to the sample outputs in Section A for the formatting
     * specification.
     */
    public String toString() {
        return "%5d %-45s %10.2f".formatted(this.id, this.name, this.price);
    }

}
