# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: 

    Who knows? LoL... jk. 
    Object-oriented programming is a notion to consider everything as an object.
    It was created to solve the problem that functional programming faces as the code gets more and more complicated and long. By having objects to encapsulate the function, methods and variables as a class, it can be used and reused over and ove again.

Researched answer:

    I watched so many videos... they're all in Hindi.. i couldn't understand. sorry. :D 
    There are four "pillars" of OOP - Object Oriented Programming
    
    Polymorphism - The idea is to use the same code block that can be applied to many other different objects. 
    
    Encapsulation - Encapsulation is to contain everything within the object or a single unit. its used to protect data structures so they don't get used or access elsewhere. 
    
    Abstraction - the idea is to hide data. 
        The act of representing the essential information and hiding the unncessary information what the intent at hand.

    Inheritance - the idea is reusability.  The children classes/instances will inherit characteristics like data and methods from their parent class. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Float numbers have decimals and integers in ruby do not have decimals. 

Researched answer:  
    There are these classes of numbers in Ruby: Numeric Integer, Fixnum, Bignum, Float, Complex, Rational, BigDecimal (Standard Library).  Each one of these classes will carry and represent the numbers a specific way.  It is important to know which class of numbers to use in which time.. for example.. when using Bignum to get decimal numbers.. its sometimes slower to process than using float numbers.

3. Ruby has an implicit return. What does that mean?

Your answer: 
    Implicit return means that the code block automatically returns something without actually declaring a return.  

Researched answer:
    Every block in ruby will return the last line automatically so it is common that people not to use a return to get their code a more cleaner looks.  There are advantages and disadvantages to using implicit return or to use a regular return.  It is important to know what methods are used exactly so that we can avoid issues with the code moving forward when trying to use implicit returns. 

4. What is a block in Ruby?

Your answer:
    A ruby block is the block of code that goes between do and end. Its almost like the body of the code. and the method that calls it is the head of the block of code. method calls signals what to do with the code block.

Researched answer:
    A block in ruby is any chuck of code between do and end. 
    Just having a block doesn't do anything, there must be a method call that goes before do.
    The method call is kind of like the head of the block, and the block is the body of the code.
    There could be single line block or multiple lines block.
    Instead of using "do" and "end", we could wrap the block inside curly braces.
    Blocks could also contain parameters.

5. How do you extract a value in a Ruby hash?

Your answer: 
    hash.fetch(key), this is a built in method which returns the value of the key inside of a hash.

Researched answer:
    to make a function out of this.. it is important to input the hash and the key.
    for example: def retrieve_value(hash, key).

    I'm sorry.. I'm just so tired. hahaha. short answers only. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostGreSql is a programming language/library to sort and access information in a database. 

2. Ruby on Rails: a full stack framework similar to react that can be used to build full scale web applications. 

3. ORM:
    Object Oriented Mapping is a technique used in computer programming. In a way it is used to map objects into a database to be accessed and used more efficiently. 

4. Active Record:
    Active Record seems to be the ORM technique used to record and store data in Ruby on Rails. It saves certain data types a specific way in specific locations within the database of rows and columns. 

5. Migrations:
    a way to change the structure and organization of data overtime implementing the specific changes you want with ruby. 
