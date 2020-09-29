const names = ["Jeff", "barry", "bob"];
const namies = ["tod", "baz", "boz", "bish", "taeon", "dispeeka"];
function randomSelector (arr) {
    randoNum = Math.floor(Math.random() * arr.length );
    randoSelect = arr[randoNum];
    return randoSelect;
}

const meals = ["Fajitas", "piri", "burger", "chicken n rice", "chicken n couscous"]

const button = document.querySelector(".button__click-desktop");
const button2 = document.querySelector(".button__click-mobile");
const bubble = document.querySelector(".amy__bubble");
const mouth = document.querySelector(".amy__mouth");

button.addEventListener("click", function() {
    setTimeout(() => {
        mouth.classList.add("animate");
        setTimeout(() => {
            bubble.classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".amy__speech").innerHTML = "You don't need to eat, you ugly fat fuck";
                setTimeout(() => {
                    document.querySelector(".amy__speech").innerHTML = "Ughh, fine. But you're doing the fucking washing up.";    
                    setTimeout(() => {
                        document.querySelector(".amy__speech").innerHTML = `I have selected <span class="bold orange"> ${randomSelector(meals)} </span> for you, you double chinned cunt.`;
                        setTimeout(() => {
                            mouth.classList.remove("animate");
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 500);
        }, 500);
    }, 1000);
})

button2.addEventListener("click", function() {
    setTimeout(() => {
        mouth.classList.add("animate2");
        setTimeout(() => {
            bubble.classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".amy__speech").innerHTML = "You don't need to eat, you ugly fat fuck";
                setTimeout(() => {
                    document.querySelector(".amy__speech").innerHTML = "Ughh, fine. But you're doing the fucking washing up.";    
                    setTimeout(() => {
                        document.querySelector(".amy__speech").innerHTML = `I have selected <span class="bold orange"> ${randomSelector(meals)}</span> for you, you double chinned cunt.`;
                        setTimeout(() => {
                            mouth.classList.remove("animate2");
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 500);
        }, 500);
    }, 1000);
})