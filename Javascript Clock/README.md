# Javascript Clock ⏰

 The following code demonstrates how to create a clock using JavaScript and CSS.<br> Here's the explanation: 

The code creates three variables: `secondHand`, `minHand`, and `hourHand`. These variables store the DOM elements for the second hand, minute hand, and hour hand, respectively.

The code then defines a `setDate()` function. This function retrieves the current date and time, and calculates the degrees by which each hand should be rotated. The degrees are calculated by dividing the current value by the total number of units in a full rotation (60 for seconds and minutes, and 12 for hours), and then multiplying by 360.

Using the `style.transform` property, the code applies the calculated degrees to rotate the three hands accordingly.

Finally, the code uses the `setInterval()` function to call the `setDate()` function every 1000 milliseconds (1 second), ensuring that the clock hands are constantly moving.

Here is a more detailed breakdown of each step:

- `const secondHand = document.querySelector('.secs');` retrieves the DOM element for the second hand.
- `const minHand = document.querySelector('.min');` retrieves the DOM element for the minute hand.
- `const hourHand = document.querySelector('.hour');` retrieves the DOM element for the hour hand.
- The `setDate()` function retrieves the current date and time using `const currentDate = new Date();`.
- The current seconds are obtained with `const seconds = currentDate.getSeconds();`, and the degrees for the second hand are calculated using `const secondDegrees = (seconds / 60) * 360;`.
- Similarly, the current minutes and hours are retrieved with `const minutes = currentDate.getMinutes();` and `const hour = currentDate.getHours();`, and their respective degrees are calculated.
- The `style.transform` property is used to apply the calculated degrees to each hand, rotating them accordingly.
- Finally, the `setInterval(setDate, 1000)` line calls the `setDate()` function every 1000 milliseconds (1 second) to keep the clock hands continuously moving.

> `secondDegrees`, `minuteDegrees`, and `hourDegrees` are variables that store the calculated rotation degrees for the second hand, minute hand, and hour hand of the clock, respectively. These degrees determine the amount of rotation needed to make each hand move accordingly..

Additionally, the `transform-origin` CSS property determines the origin point around which a CSS transform is applied. It defines the position within the element from which transformations like rotations, scaling, or translations are performed. By adjusting the `transform-origin` value, you can control the pivot point or center of the transformation effect.


The code above demonstrates how to create a clock with rotating hands using JavaScript and CSS. It provides a dynamic representation of the current time. Feel free to customize the styling and further enhance the functionality to suit your needs.
