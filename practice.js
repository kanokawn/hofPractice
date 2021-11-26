// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var filtered = _.filter(fruits, function (fruit) {
    return fruit === targetFruit;
  });
  return filtered;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var filtered = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return filtered;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var filtered = _.filter(desserts, function(dessert) {
    return dessert === 'cookie';
  });
  return filtered;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function (total, products) {
    var priceFloat = parseFloat(products.price.slice(1));
    return total + priceFloat;
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var dessertTypeCounts = {};
  _.reduce(desserts, function(type, desserts) {
    if (dessertTypeCounts[desserts.type] === undefined) {
      dessertTypeCounts[desserts.type] = 1;
    } else {
      dessertTypeCounts[desserts.type]++;
    }
  }, 0);
  return dessertTypeCounts;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var newArray = [];
  _.reduce(movies, function(title, movies) {
    if (movies.releaseYear >= 1990 && movies.releaseYear <= 2000) {
      newArray.push(movies.title);
      return newArray;
    }
  }, []);
  return newArray;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  var shorterTimeExists = false;
  _.reduce(movies, function(runtime, movies) {
    if (movies.runtime < timeLimit) {
      shorterTimeExists = true;
    }
  }, timeLimit);
  return shorterTimeExists;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  _.map(fruits, function (fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  _.map(desserts, function(dessert) {
    var ingredientsList = dessert.ingredients;
    if (ingredientsList.indexOf('flour') === -1) {
      return dessert.glutenFree = true;
    } else {
      return dessert.glutenFree = false;
    }
  });
  return desserts;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  _.map(groceries, function(item) {
    var priceFloat = parseFloat(item.price.slice(1));
    var discountedPrice = (priceFloat - (priceFloat * coupon));
    item.salePrice = '$' + parseFloat(discountedPrice).toFixed(2);
  });
  return groceries;
};

//Forgot to fork and clone via my respository
