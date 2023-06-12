const secondHand = document.querySelector('.secs');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

function setDate(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds();
    const secondDegrees = ((seconds / 60) * 360);

   
    const minutes = currentDate.getMinutes();
    const minDegrees = ((minutes/60) * 360);

    const hour = currentDate.getHours()
    const hourDegrees = ((hour/12) * 360);


    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    minHand.style.transform =  `rotate(${minDegrees}deg)`
    hourHand.style.transform =  `rotate(${hourDegrees}deg)`
    
}

setInterval(setDate, 1000)