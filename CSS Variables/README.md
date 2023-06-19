# CSS Variables 📊

The following code demonstrates how to create an interactive app that instantly updates its appearance as the user modifies the input values.<br> Here's the explanation:


The code creates a variable `inputs` that contains all of the input elements with the class `.controls`.

The code then creates a function called `handleUpdate()`. This function gets the value of the input element that triggered the event, and then sets the CSS variable with the same name as the input element to the value of the input element, with the suffix from the dataset property if it exists.

The code then uses the `forEach()` method to iterate through the `inputs` array and call the `handleUpdate()` function for each input element. This code will update the CSS variable for each input element whenever the value of the input element changes.

Here is a more detailed explanation of each step:

1. The `const inputs = document.querySelectorAll(".controls input");` line gets all of the input elements with the class `.controls` and stores them in the `inputs` variable.

2. The `function handleUpdate()` line creates the `handleUpdate()` function.

3. The `const suffix = this.dataset.sizing || '';` line gets the value of the `dataset.sizing` property from the current element, which is `"px"` in this case, or an empty string if the property does not exist.

4. The `document.documentElement.style.setProperty(--${this.name}, this.value + suffix)` line sets the CSS variable with the same name as the current element to the value of the current element, with the suffix from the `dataset` property if it exists.

5. The `inputs.forEach(input => input.addEventListener('input', handleUpdate));` line iterates through the `inputs` array and calls the `handleUpdate()` function for each input element.


The code above enables real-time updates whenever the user modifies the input values. We can achieve this using CSS variables and a little Javascript script.
