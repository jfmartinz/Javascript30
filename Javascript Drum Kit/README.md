# **Day 1: Drum Kit** 🥁

This project implements a drum kit where different sounds are played when corresponding keys are pressed. It consists of the following components:

## <code>playSound()</code> Function
- This function is triggered when a key is pressed.
- It retrieves the associated audio element and key element.
- If no audio element is found, the function returns.
- Otherwise, it sets the audio element's current time to 0 and plays the sound.
- Additionally, it adds the "playing" class to the key element.

## <code>removeTransition()</code> Function
- This function is called when a transition ends.
- It checks if the event property name is "transform".
- If true, it removes the "playing" class from the current element.

## <code>keys</code> Variable
- An array containing all the drum pads on the page.

## <code>keys.forEach()</code> Loop
- This loop iterates through each key element in the keys array.
- For each key, it calls the <code>removeTransition()</code> function to remove the "playing" class.

## <code>window.addEventListener()</code>
- Adds an event listener for the keydown event.
- When a keydown event occurs, the <code>playSound()</code> function is triggered.

This project demonstrates how to create interactive audio experiences using JavaScript. It can be expanded by adding more drum pads, custom sounds, and further enhancements to improve the user experience. Enjoy playing with the drum kit!
