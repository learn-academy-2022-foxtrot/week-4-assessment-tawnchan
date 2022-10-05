# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# This method is pretty simple.
# First, I'll define the method by giving it a name of "even_or_odd" that takes in a number. I'll just 'num' as a placeholder.
# here we do the logic with an 'if statement'
# and do a little math using the modulo function that returns the remainder of a number.
# we make a conditional statement to see if the remainder strictly equals to 0.
# it returns a true or false value, so we make it print a string interpolated output.
# if the remainder is 0 or 'true' then it prints "#{num} is even"
# with an else statement, we make it print a string interpolated output: "{num} "
def even_or_odd(num)    
    if num % 2 == 0
    p "#{num} is even" else p "#{num} is odd"
    end
end

even_or_odd(num1)   # output: "7 is odd"
even_or_odd(num2)   # output: "42 is even"
even_or_odd(num3)   # output: "221 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Declare a function, name it delete_vowels. it takes in a string as an argument(parameter).
# it returns the string with the .delete method applied to 'aeiouAEIOU' to include capital letters to delete any vowels the given variables may contain.
def delete_vowels(string)

    string.delete 'aeiouAEIOU'

end

p delete_vowels(beatles_album1) # output: "Rbbr Sl"
p delete_vowels(beatles_album2) # output: "Sgt Pppr"
p delete_vowels(beatles_album3) # output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# declare the function, name it 'palindrome', it takes in a string as an argument.
# for the  method, we add .downcase to the string so that it could be uniform whether the user typed capitalized or not. it would measure the same thing... a downcased verison.
# we compare the string to see if it is strictly equal to the same string.reversed. 
# if it does, then its a palindrome, if not then its not.
def palindrome(string)
    if string.downcase === string.downcase.reverse
        p "#{string} is a palindrome" 
    elsif p "#{string} is not a palindrome"
    else p "something is brokeneth"
    end
end

palindrome(palindrome_tester1) # output: "Racecar is a palindrome"
palindrome(palindrome_tester2) # output: "LEARN is not a palindrome"
palindrome(palindrome_tester3) # output: "Rotator is a palindrome"
