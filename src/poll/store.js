export const store = [
    {
        id: "1",
        desc: "¿Cuál es el output de este código?",
        code: `
let i = 2
console.log(i++)
        `,
        possibleAnswers: [
            "2",
            "3",
            "Syntax error"
        ],
        correct: "2"
    },
    {
        id: "2",
        desc: "¿Cuál es el output de true + false?",
        code: `
console.log(true + false)
        `,
        possibleAnswers: [
            "false",
            "1",
            "NaN"
        ],
        correct: "1"
    },
]

export default store