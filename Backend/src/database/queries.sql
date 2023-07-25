CREATE DATABASE Ecommercesystem
  
  use Ecommercesystem

  -- Create the Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
);

-- Create the Categories table with a surrogate key
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY(1,1),
    CategoryName VARCHAR(255) NOT NULL,
    CONSTRAINT UQ_Categories_CategoryName UNIQUE (CategoryName)
);
INSERT INTO Categories (CategoryName)
VALUES ('Jackets'),
       ('Sweatpants'),
       ('Sweaters'),
       ('Shirts'),
       ('T-Shirts'),
       ('Hoodies'),
       ('Winter Hats');


-- Create the Products table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName VARCHAR(255) NOT NULL,
    Description VARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL,
    CategoryID INT NOT NULL,
    CONSTRAINT FK_Products_Categories FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);
INSERT INTO Products (ProductName, Description, Price, StockQuantity, CategoryID)
VALUES
  ('Hoodie', 'A cozy hoodie for everyday wear', 29.99, 50, 1),
  ('Hoodie', 'A stylish hoodie with a unique design', 39.99, 30, 1),
  ('Jacket', 'A lightweight jacket for spring', 59.99, 20, 2),
  ('Shirt', 'A casual shirt for any occasion', 24.99, 100, 3),
  ('Sweater', 'A warm sweater for the winter season', 49.99, 40, 4),
  ('Sweatpants', 'Comfortable sweatpants for lounging', 34.99, 60, 5),
  ('Winter Hat', 'A cozy hat to keep you warm', 19.99, 25, 6),
  ('Jacket', 'A waterproof jacket for outdoor activities', 69.99, 15, 2),
  ('Jeans', 'Classic denim jeans for a timeless look', 59.99, 50, 5),
  ('Dress Shirt', 'A formal dress shirt for special occasions', 39.99, 30, 3),
  ('T-Shirt', 'A basic t-shirt for everyday wear', 14.99, 80, 3),
  ('Coat', 'A stylish coat for colder weather', 89.99, 20, 2),
  ('Pants', 'Versatile pants for any outfit', 44.99, 70, 5),
  ('Beanie', 'A cozy beanie for chilly days', 9.99, 35, 6),
  ('Sweatshirt', 'A comfortable sweatshirt for casual outings', 39.99, 50, 1),
  ('Polo Shirt', 'A classic polo shirt for a polished look', 34.99, 60, 3),
  ('Blazer', 'A sophisticated blazer for formal events', 99.99, 25, 2),
  ('Shorts', 'Stylish shorts for warm weather', 29.99, 45, 5),
  ('Winter Jacket', 'A warm jacket for extreme winter conditions', 79.99, 15, 2),
  ('Sweat Shorts', 'Casual shorts for comfortable lounging', 24.99, 40, 5),
  ('Knit Hat', 'A cozy knit hat for the winter season', 14.99, 30, 6),
  ('Windbreaker', 'A lightweight windbreaker for outdoor activities', 54.99, 20, 2),
  ('Chinos', 'Versatile chinos for a smart-casual look', 49.99, 50, 5),
  ('Oxford Shirt', 'A classic oxford shirt for a polished appearance', 39.99, 30, 3),
  ('Sweatshirt', 'A trendy sweatshirt for a stylish outfit', 44.99, 40, 1),
  ('Bomber Jacket', 'A trendy bomber jacket for a cool look', 79.99, 20, 2),
  ('Cargo Pants', 'Functional cargo pants for outdoor activities', 59.99, 30, 5),
  ('Beanie', 'A stylish beanie to complete your winter outfit', 19.99, 35, 6),
  ('Denim Jacket', 'A classic denim jacket for a timeless style', 69.99, 25, 2),
  ('Turtleneck Sweater', 'A cozy turtleneck sweater for colder days', 49.99, 40, 4),
  ('Sports Shorts', 'Comfortable sports shorts for active days', 24.99, 50, 5);

-- Create the Orders table
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT NOT NULL,
    OrderDate DATETIME NOT NULL DEFAULT GETDATE(),
    ShippingAddress VARCHAR(255) NOT NULL,
    PaymentStatus VARCHAR(255) NOT NULL,
    OrderStatus VARCHAR(255) NOT NULL,
    CONSTRAINT FK_Orders_Users FOREIGN KEY (CustomerID) REFERENCES Users(UserID)
);

-- Create the OrderItems table
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY IDENTITY(1,1),
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    CONSTRAINT FK_OrderItems_Orders FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    CONSTRAINT FK_OrderItems_Products FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Create the Cart table
CREATE TABLE Cart (
    CartID INT PRIMARY KEY IDENTITY(1,1),
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    CustomerID INT NOT NULL,
    CONSTRAINT FK_Cart_Users FOREIGN KEY (CustomerID) REFERENCES Users(UserID),
    CONSTRAINT FK_Cart_Products FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Create the Payment table
CREATE TABLE Payment (
    PaymentID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT NOT NULL,
    PaymentMethod VARCHAR(255) NOT NULL,
    TransactionDetails VARCHAR(MAX),
    Status VARCHAR(255) NOT NULL,
    CONSTRAINT FK_Payment_Users FOREIGN KEY (CustomerID) REFERENCES Users(UserID)
);

-- Create the Reviews table
CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY IDENTITY(1,1),
    ProductID INT NOT NULL,
    CustomerID INT NOT NULL,
    ReviewContent VARCHAR(MAX),
    Rating INT NOT NULL,
    ReviewDate DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_Reviews_Products FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    CONSTRAINT FK_Reviews_Users FOREIGN KEY (CustomerID) REFERENCES Users(UserID)
);
INSERT INTO Reviews (ProductID, CustomerID, ReviewContent, Rating, ReviewDate)
VALUES
    (1, 101, 'Great product! I love it.', 5, '2023-07-20 12:30:00'),
    (1, 102, 'Good product. Works as expected.', 4, '2023-07-19 10:15:00'),
    (2, 103, 'Average product. Not bad, but not exceptional either.', 3, '2023-07-18 08:45:00'),
    (3, 104, 'Disappointed with the quality. Would not recommend.', 2, '2023-07-17 14:20:00'),
    (4, 105, 'Excellent service and fast shipping!', 5, '2023-07-16 16:50:00'),
    (4, 106, 'Great customer support. Very helpful.', 5, '2023-07-15 09:10:00'),
    (5, 101, 'The product arrived damaged. Need a replacement.', 1, '2023-07-14 11:40:00'),
    (6, 107, 'Best purchase ever! Highly recommended!', 5, '2023-07-13 17:25:00');


