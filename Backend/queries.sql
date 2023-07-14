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
VALUES ('Jacket 1', 'Warm winter jacket', 99.99, 10, 1),
       ('Sweatpants 1', 'Comfortable sweatpants', 29.99, 20, 2),
       ('Sweater 1', 'Cozy knitted sweater', 49.99, 15, 3),
       ('Shirt 1', 'Stylish long-sleeve shirt', 39.99, 30, 4),
       ('T-Shirt 1', 'Casual short-sleeve t-shirt', 19.99, 25, 5),
       ('Hoodie 1', 'Fleece-lined hoodie', 59.99, 12, 6),
       ('Winter Hat 1', 'Knitted winter hat', 14.99, 50, 7);


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

