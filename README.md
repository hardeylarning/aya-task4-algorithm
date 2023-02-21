# Q5 You have two matrices A and B of sizes n x n and need to compute their product C = A x B. Can you come up with an algorithm that can parallelize this computation to take advantage of multiple processors or cores? What is the theoretical limit of speedup you can achieve with this approach?

Working with 2D Array O(n * m), n is the row and m is the column respectively in order to traverse 2D array

## Breakdown of solution
1. A function was created to calculate product of any 2D array 
2. 2 variables were also used for getting first and second results of the product of each passed 2D array to the function
3. A variable c was also used to get the result of the product of variable a and b 