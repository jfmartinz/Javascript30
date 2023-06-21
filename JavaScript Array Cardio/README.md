# Javascript Array Cardio 💪

In Day 4 of his course, Wes Bos focused on essential concepts in functional programming using JavaScript. He introduced important array methods like `map()`, `reduce()`, `filter()`, and `sort()`.

The `map()` method is used to create a new array by applying a provided function to each element in the original array. It returns an array of the same length, where each element represents the result of applying the function.

> Problem:  Give us an array of the inventors first and last names

#### `Syntax:`
```js
 const fullNames = inventors.map(inventor => `${inventor.first}  ${inventor.last}`);
 console.table(fullNames)
```

<details>
<summary>EXPLANATION 👇</summary>

#### `Array.prototpye.map:`


The code first defines a variable called `fullNames` and initializes it to an empty array. Then, it uses the `map()` method to iterate through the `inventors` array. The `map()` method takes a callback function as an argument, and in this case the callback function is `inventor =>` ``${inventor.first}  ${inventor.last}``. This callback function takes an inventor object as an argument and returns a string with the inventor's first and last names concatenated together.

For example, if the `inventors` array contains the following object:

```js
{
  "first": "Thomas",
  "last": "Edison"
}
```

The callback function would return the following string:

```js
"Thomas Edison"
```

The `map()` method then adds the string returned by the callback function to the `fullNames` array. After the `map()` method has finished iterating through the `inventors` array, the `fullNames` array will contain an array of strings with the first and last names of all the inventors.

Finally, the code uses the `console.table()` method to print the `fullNames` array to the console.
</details>

---

 The `reduce()` method allows you to reduce an array to a single value. By using a callback function, it iterates through the array and accumulates a value based on the provided logic. The final result is a single value.

> Problem:  How many years did all the inventors live all together?

#### `syntax:`
```js
  const totalYearsLived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0)
    console.log(totalYearsLived)
```

<details>

<summary>EXPLANATION 👇</summary>

#### `Array.prototpye.reduce:`


The code first defines a variable called `totalYearsLived` and initializes it to 0. Then, it uses the `reduce()` method to iterate through the `inventors` array. The `reduce()` method takes a callback function as an argument, and in this case the callback function is ``(total, inventor) => {
    return total + (inventor.passed - inventor.year)};``. This callback function takes two arguments: the current total number of years lived and the current inventor object. The callback function then returns the new total number of years lived, which is the sum of the current total and the number of years the current inventor lived.

For example, if the `inventors` array contains the following objects:

```js
{
  "year": 1847,
  "passed": 1931
},
{
  "year": 1856,
  "passed": 1937
}
```

The callback function would be called twice, once for each inventor object. The first time the callback function is called, the current total would be 0, and the current inventor object would be the first object in the `inventors` array. The callback function would then return the new total, which would be 84 (the difference between 1931 and 1847). The second time the callback function is called, the current total would be 84, and the current inventor object would be the second object in the `inventors` array. The callback function would then return the new total, which would be 81 (the difference between 1937 and 1856).

After the `reduce()` method has finished iterating through the `inventors` array, the `totalYearsLived` variable will contain the total number of years all the inventors lived.

Finally, the code uses the `console.log()` method to print the `totalYearsLived` variable to the console.
</details>

---


The `filter()` method creates a new array by filtering out elements from the original array based on a specified condition. It uses a callback function that should return `true` for elements to be included in the new array, and `false` for elements to be excluded.

  > Problem: Filter the list of inventors for those who were born in the 1800's to 1900's 

#### `syntax:`
```javascript
  const dateOfBirth = inventors.filter(function(inventor){
     if(inventor.year >= 1800 && inventor.year<=1900){
         return true;
     }
   });
```


 #### `shorthand:`
 ```js
 const dateOfBirth = inventors.filter(inventor => (inventor.year >= 1800 && inventor.year<=1900));
 ```

<details>

<summary>EXPLANATION 👇</summary>

#### `Array.prototype.filter:`


The code first defines a variable called `dateOfBirth` and initializes it to an empty array. Then, it uses the `filter()` method to iterate through the `inventors` array. The `filter()` method takes a callback function as an argument, and in this case the callback function is ``function(inventor)
     if(inventor.year >= 1800 && inventor.year<=1900)
         return true ``.
 This callback function takes an inventor object as an argument and returns a boolean value. The callback function returns `true` if the inventor's year of birth is between 1800 and 1900, and `false` otherwise.

For example, if the `inventors` array contains the following objects:

```js
{
  "year": 1847,
},
{
  "year": 1856,
},
{
  "year": 1901,
}
```

The callback function would be called three times, once for each inventor object. The first two times the callback function is called, it would return `true`, because the year of birth of the first two inventor objects is between 1800 and 1900. The third time the callback function is called, it would return `false`, because the year of birth of the third inventor object is not between 1800 and 1900.

After the `filter()` method has finished iterating through the `inventors` array, the `dateOfBirth` array will contain the inventor objects whose year of birth is between 1800 and 1900.
</details>

---

Lastly, the `sort()` method arranges the elements of an array in ascending order by default. It modifies the original array, but you can create a copy before applying the method if you want to preserve the original.

> Problem:  Sort the inventors by birth date, oldest to youngest


#### `syntax:`

```js
   const oldestToYoung = inventors.sort(function(firstPerson,secondPerson){
     if(firstPerson.year > secondPerson.year){
         return 1
     }else{
         return -1
     }
   });
```
#### `shorthand:`
```js
const oldestToYoung = inventors.sort((firstPerson,secondPerson) => firstPerson.year > secondPerson.year ? 1: -1);
```

<details>
<summary>EXPLANATION 👇</summary>

#### `Array.prototype.sort:`

The code first defines a variable called `oldestToYoung` and initializes it to the `inventors` array. Then, it uses the `sort()` method to sort the `inventors` array. The `sort()` method takes a callback function as an argument, and in this case the callback function is ``function(firstPerson,secondPerson)
     if(firstPerson.year > secondPerson.year)?
        return 1:
         return -1:``. This callback function takes two inventor objects as arguments and returns an integer. The integer returned by the callback function determines the order in which the two inventor objects are sorted.

The callback function returns 1 if the first inventor object's year of birth is greater than the second inventor object's year of birth. This means that the first inventor object will be sorted before the second inventor object. The callback function returns -1 if the first inventor object's year of birth is less than the second inventor object's year of birth. This means that the second inventor object will be sorted before the first inventor object.

After the `sort()` method has finished sorting the `inventors` array, the `oldestToYoung` variable will contain the sorted array. The sorted array will be in ascending order, based on the year of birth of the inventors.

</details>

---


These array methods are fundamental to functional programming in JavaScript. They provide powerful tools for manipulating and transforming arrays, enabling developers to write cleaner and more concise code.

I hope you find this explanation easy and helpful. Happy coding! 🚀