choiceList = []

function randomSelector () {
    randoNum = Math.floor(Math.random() * choiceList.length );
    randoSelect = choiceList[randoNum];
    return randoSelect;
}

const button = document.querySelector(".click-sort-desktop");
const button2 = document.querySelector(".click-sort-mobile");
const bubble = document.querySelector(".amy__bubble");
const mouth = document.querySelector(".amy__mouth");
const input = document.querySelector(".input__1");
const add = document.querySelector(".input__click-desktop");

button.addEventListener("click", function() {
    if (choiceList.length >= 2) {
        bubble.classList.add("hidden");
    document.querySelector(".amy__speech").innerHTML = " ";
    setTimeout(() => {
        mouth.classList.add("animate");
        setTimeout(() => {
            bubble.classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".amy__speech").innerHTML = "Okay, let me think...";
                setTimeout(() => {
                    document.querySelector(".amy__speech").innerHTML = "...";    
                    setTimeout(() => {
                        document.querySelector(".amy__speech").innerHTML = `Your random selection is: <span class="bold orange"> ${randomSelector()}</span>.`;
                        setTimeout(() => {
                            mouth.classList.remove("animate");
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 500);
        }, 500);
    }, 1000);
    } else {
        bubble.classList.add("hidden");
    document.querySelector(".amy__speech").innerHTML = " ";
    setTimeout(() => {
        mouth.classList.add("animate");
        setTimeout(() => {
            bubble.classList.remove("hidden");
            setTimeout(() => {
                document.querySelector(".amy__speech").innerHTML = "You need to add a range of choices, dumbarse.";
                setTimeout(() => {
                    mouth.classList.remove("animate");
                }, 2000);
            }, 500);
        }, 500);
    }, 1000);
    }
    
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





add.addEventListener("click", function() {
        item = input.value;
        if (item.length > 0) {
        node = document.createElement("li");
        node.classList.add("input__choice");
        textNode = document.createTextNode(item);
        node.appendChild(textNode);
        document.querySelector(".input__choices").appendChild(node);
        choiceList.push(item);
        input.value=" ";
    }  
})

document.querySelectorAll(".tv-button").forEach((item) => {
    item.addEventListener("click", function() {
        bgnum = this.id;
        console.log(bgnum)
        switch(bgnum) {
            case "bg1":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/ranch.jpg")';
                    setTimeout(() => {
                        document.querySelector(".input").classList.add("hidden");
                        setTimeout(() => {
                            document.querySelector(".littleAmy").style.opacity = "1";
                            mouth.classList.add("animate");
                            document.querySelector(".random").classList.remove("hidden");
                            setTimeout(() => {
                                bubble.style.opacity = "0.8";
                                setTimeout(() => {
                                    document.querySelector(".amy__speech").innerHTML = "Hi, I'm little Amy.";
                                    setTimeout(() => {
                                        document.querySelector(".amy__speech").innerHTML = "You have picked the random selector tool.";    
                                        setTimeout(() => {
                                            document.querySelector(".amy__speech").innerHTML = `Use the box to the right to add your possible choices, then click the action button.`;
                                            setTimeout(() => {
                                                mouth.classList.remove("animate");
                                            }, 2000);
                                        }, 2000);
                                    }, 2000);
                                }, 500);
                            }, 500);
                        }, 1000);
                    }, 1000); 
                }, 1000);
                
                break;
            case "bg2":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/ship.jpg")'; 
                }, 2000);
                
                break;
            case "bg3":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/ship.jpg")';
                }, 2000);
                break;
            case "bg4":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/ship.jpg")';
                }, 2000);
                break;
            case "bg5":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/ranch.jpg")';
                }, 2000);
                break;
            case "bg6":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/jfk.jpg")';
                }, 2000);
                break;
            case "bg7":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/war.jpg")';
                }, 2000);
                break;
            case "bg8":
                document.querySelector(".littleAmy").style.opacity = "0";
                document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/static2.gif")';
                setTimeout(() => {
                    document.querySelector(".input").classList.remove("hidden");
                    document.querySelector(".random").classList.add("hidden");
                    document.querySelector(".backgroundcontainer").style.backgroundImage = 'url("../img/rainbow.jpg")';
                }, 2000);
                break;
        }
    })

}) 
