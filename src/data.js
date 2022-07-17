const questions = [
    {
        id: 1,
        questionText: "Which operator returns true if the two compared values are not equal?",
        answerOptions: [
            { answerText: "<>", isCorrect: false, isHeld: false },
            { answerText: "~", isCorrect: false, isHeld: false },
            { answerText: "==!", isCorrect: false, isHeld: false },
            { answerText: "!==", isCorrect: true, isHeld: false }
        ]
    },
    {
        id: 2,
        questionText: "Which statement is the correct way to create a variable called rate and assign it the value 100?",
        answerOptions: [
            { answerText: "let rate = 100;", isCorrect: true, isHeld: false },
            { answerText: "let 100 = rate;", isCorrect: false, isHeld: false },
            { answerText: "100 = let rate;", isCorrect: false, isHeld: false },
            { answerText: "rate = 100;", isCorrect: false, isHeld: false }
        ]
    },
    {
        id: 3,
        questionText: "Which method converts JSON data to a JavaScript object?",
        answerOptions: [
            { answerText: "JSON.fromString();", isCorrect: false, isHeld: false },
            { answerText: "JSON.parse()", isCorrect: true, isHeld: false },
            { answerText: "JSON.toObject()", isCorrect: false, isHeld: false },
            { answerText: "JSON.stringify()", isCorrect: false, isHeld: false }
        ]
    },
    {
        id: 4,
        questionText: "Which Object method returns an iterable that can be used to iterate over the properties of an object?",
        answerOptions: [
            { answerText: "Object.get()", isCorrect: false, isHeld: false },
            { answerText: "Object.loop()", isCorrect: false, isHeld: false },
            { answerText: "Object.each()", isCorrect: false, isHeld: false },
            { answerText: "Object.keys()", isCorrect: true, isHeld: false }
        ]
    },
    {
        id: 5,
        questionText: "Which of the following values is not a Boolean false?",
        answerOptions: [
            { answerText: "Boolean(0)", isCorrect: false, isHeld: false },
            { answerText: "Boolean('')", isCorrect: false, isHeld: false },
            { answerText: "Boolean(NaN)", isCorrect: false, isHeld: false },
            { answerText: "Boolean('false')", isCorrect: true, isHeld: false }
        ]
    },
];

export default questions;