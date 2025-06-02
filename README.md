# Week 1: MongoDB Assignment

## Overview
This repository contains the solution for the Week 1 MongoDB assignment, including scripts to populate a `plp_bookstore` database and perform CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Prerequisites
- MongoDB Community Edition or MongoDB Atlas.
- Node.js and MongoDB Node.js driver (`npm install mongodb`).
- MongoDB Shell (`mongosh`) or MongoDB Compass.

## Setup Instructions
1. **MongoDB Setup**:
   - Local: Install MongoDB and start `mongod`.
   - Atlas: Create a cluster and note the connection string.
2. **Populate Database**:
   - Update `uri` in `insert_books.js` if using Atlas.
   - Run: `node insert_books.js`
3. **Run Queries**:
   - Open `mongosh` or Compass and connect to `plp_bookstore`.
   - Copy queries from `queries.js` and execute them.
   - Verify results in Compass or `mongosh`.

## Files
- `insert_books.js`: Populates the `books` collection.
- `queries.js`: Contains all MongoDB queries.
- `README.md`: This file.
- `screenshots.png`: Screenshot of the `books` collection in Compass.

## Notes
- Queries are in `mongosh` syntax for compatibility with the assignment.
- Run `explain("executionStats")` queries before and after creating indexes to compare performance.