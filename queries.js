

// Task 2: Basic CRUD Operations
// 1. Find all books in a specific genre (e.g., Fiction)
db.books.find({ genre: "Fiction" }).pretty();

// 2. Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } }).pretty();

// 3. Find books by a specific author (e.g., George Orwell)
db.books.find({ author: "George Orwell" }).pretty();

// 4. Update the price of a specific book (e.g., set price of "1984" to 13.99)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 13.99 } }
);

// 5. Delete a book by its title (e.g., "Moby Dick")
db.books.deleteOne({ title: "Moby Dick" });

// Task 3: Advanced Queries
// 6. Find books that are both in stock and published after 1950
db.books.find({
  in_stock: true,
  published_year: { $gt: 1950 }
}).pretty();

// 7. Find books with projection (return only title, author, and price)
db.books.find(
  {},
  { title: 1, author: 1, price: 1, _id: 0 }
).pretty();

// 8. Sort books by price (ascending)
db.books.find().sort({ price: 1 }).pretty();

// 9. Sort books by price (descending)
db.books.find().sort({ price: -1 }).pretty();

// 10. Pagination (5 books per page, first page)
db.books.find().skip(0).limit(5).pretty();

// 11. Pagination (second page)
db.books.find().skip(5).limit(5).pretty();

// Task 4: Aggregation Pipeline
// 12. Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } },
  { $sort: { _id: 1 } }
]).pretty();

// 13. Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]).pretty();

// 14. Group books by publication decade and count them
db.books.aggregate([
  { $group: { _id: { $floor: { $divide: ["$published_year", 10] } }, count: { $sum: 1 } } },
  { $project: { decade: { $concat: [{ $toString: { $multiply: ["$_id", 10] } }, "s"] }, count: 1, _id: 0 } },
  { $sort: { decade: 1 } }
]).pretty();

// Task 5: Indexing
// 15. Create an index on the title field
db.books.createIndex({ title: 1 });

// 16. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 17. Demonstrate performance with explain() for title search
db.books.find({ title: "1984" }).explain("executionStats");

// 18. Demonstrate performance with explain() for author and year
db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats");