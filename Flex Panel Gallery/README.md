**Day 5: Flex Panel Gallery** 🖼️

The following code demonstrates how to create a flexible panel gallery where panels expand and reveal hidden content when clicked.

Here's the explanation:


1. The code begins by selecting all the panel elements on the page using the `document.querySelectorAll('.panel')` method. It assigns the selected elements to the `panels` variable.

2. Next, we define the `toggleOpen()` function. This function is responsible for handling the click event on a panel. When called, it toggles the presence of the 'open' class on the clicked panel using the `classList.toggle('open')` method. This class controls the expanding and collapsing behavior of the panel.

3. Then, we define the `toggleActive(e)` function, which serves as an event handler for the `transitionend` event. This event is triggered when a CSS transition on the panel ends. Inside the function, we check if the `propertyName` of the event (`e.propertyName`) includes the word 'flex'. If it does, it means the panel has finished its transition, and we toggle the 'open-active' class on the panel using `classList.toggle('open-active')`. This class adds a visual effect to the panel.

4. We add event listeners to each panel element using the `forEach()` method. The first listener listens for the 'click' event and calls the `toggleOpen()` function when triggered. This allows the panels to expand or collapse when clicked by the user. The second listener listens for the 'transitionend' event and calls the `toggleActive()` function when triggered. This ensures that the 'open-active' class is toggled appropriately when the panel finishes its transition.

The code presented above creates an interactive gallery that allows panels to expand and reveal hidden content upon user interaction. By utilizing JavaScript and CSS transitions.****
