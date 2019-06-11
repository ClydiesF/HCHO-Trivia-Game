'use strict';

// Data Structure for Categories and Answers
const Trivia = {
    Clyde: {
        Questions: ["How old is Clyde?", "What is his favorite game?", "Where is clyde from?"],
        Answers: [30, "Halo", "Roxbury"],
        dummy: [
            [10, 16, 80],
            ["Powerstone", "Gears of War", "Devil May Cry"],
            ["FramingHam", "Texas", "Mars"]
        ]
    },
    Kita: {
        Questions: ["How old is Kita?", "What her favoite color?", "What is her favorite team?"],
        Answers: [27, "Black", "Steelers"]
    },
    Grimm: {
        Questions: ["What animal is Grimm?", "Does grimm like outside food?", "What color is he?"],
        Answers: ["Cat", false, "Light grey"]
    }
}


$(".Cat-box").click((e) => {
    let catName = e.target.textContent;
    $("#Cat-Select").text(catName);
    $("#question").text(Trivia[catName].Questions[0]);

    // Creates a new array and puts the correct answer inside of it 
    let options = Trivia[catName].dummy[0];
    options.push(Trivia[catName].Answers[0]);
    let index = [0, 1, 2, 3]
        // loop through options and display them in a random order
    options.forEach((el) => {
        // Create a "p" Element
        let random = Math.floor(Math.random() * index.length);
        let answer1 = document.createElement('p');
        let txt = document.createTextNode(Trivia[catName].dummy[0][index[random]]);
        answer1.append(txt);
        $(".answers").append(answer1);
        console.log(index.length)
        console.log(random)
        index.splice(random, 1)

        console.log(index);

    });

})

// Logic to handle an answer Click

//  Logic to handle the next Button/