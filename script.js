'use strict';

// Data Structure for Categories and Answers

const Trivia = {
    Clyde: {
        Questions: ["How old is Clyde?", "What is his favorite game?", "Where is clyde from?"],
        Answers: [30, "Halo", "Roxbury"]
    },
    Kita: {
        Questions: ["How old is Kita?", "What her favoite color?", "What is her favorite team?"],
        Answers: [27, "Black", "Steelers"]
    }
}


console.log("its working");


$(".Cat-box").click((e) => {
    let catName = e.target.textContent;
    console.log(e.target.textContent);
    $("#Cat-Select").text(catName);
    $("#question").text(Trivia[catName].Questions[0])
})