// ...On scroll slide in from the left..
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hamburgerBtn = document.getElementsByClassName('hamburger-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')})

// ...On scroll slide in from the right..

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el));


let easterEggNote = ['You found my Easter Egg. Here is your reward']
/* jokes and quotes that will be randomized */
let wisdom = [
    'What do you call a fish wearing a bowtie?   Sofishticated', 'Why did the golfer bring two pairs of pants?  In case she got a hole in one', 'What did the digital clock say to its mom?  Look Mom, no hands',
'How many programmers does it take to change a light bulb?  None, its a hardware problem', 'I just saw my life flash before my eyes and all I could see was a close tag', 'Why did the orange lose the race? It ran out of juice', 'Why are fish so smart? They live in schools',
'Stop looking for a perfect match instead use a lighter', 'Its okay if you dont like me, not everyone has good taste', 'Life is too short, smile while you have teeth', 
'Those arent gray hairs, there just highlights', 'What do you call an angry carrot?  A steamed vegetable', 'Why did the bicycle fall over?  Because it was too tired', 
'I ordered a chicken and an egg online. I will let you know what comes first', 'Why do mushrooms get invited to all the parties?  Because they are such fungis',
'Why couldnt the sailor learn the alphabet?  He got lost at C' ];
/*
enter name prompt that returns a message to the user.
*/
enterName = () => {
    let character = prompt('enter your name');
    if (character != null) {
        document.getElementById('enterYourName').innerHTML = `Awww the brave warrior, ${character} click character select to see the rest of your team. Good luck!`;
    }

};





//random name generator function to return random names of anime and cartoon characters. 
randomWisdom = () => {
    document.getElementById("easterEgg").innerHTML = `${[easterEggNote]}`;
    document.getElementById("returnQuote").innerHTML = `${wisdom [Math.floor(Math.random() * wisdom.length)]},`; 
    
 
           
};


// let timer;
// const runTimer = () => {
//   timer = window.setTimeout(
//     () => {
//       document.body.style.backgroundColor = 'green'
//     }, 8000);
// }
// runTimer();
// document.body.onclick = () => {
//   clearTimeout(timer)
//   runTimer()
// }
// document.body.style.backgroundColor = 'red';
function quoteReset() {
    document.getElementsById("hellowWorld").reset();
  }