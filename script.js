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
    console.log(e.target.textContent);
    $("#Cat-Select").text(catName);
    $("#question").text(Trivia[catName].Questions[0]);
    // Create a "p" Element
    let answer1 = document.createElement('p');
    let txt = document.createTextNode(Trivia[catName].Answers[0]);

    answer1.append(txt);
    console.log(answer1)
    console.log(Trivia[catName].Answers[0])
    $(".answers").append(answer1);
})