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
    {
        id: "3",
        desc: "¿Cuál es el output de este código en JSX?",
        code: `
const items = [{id:"1", name:"stick"}, {id:"2", name:"rule"}]
return (
    <section>
        {items.map(item => {
            <h2>{item.name}</h2>
        })}
    </section>
)
        `,
        possibleAnswers: [
            "stick rule (in h2 tags)",
            "Nothing (Empty section)",
            "Error"
        ],
        correct: "Nothing (Empty section)"
    }
]

export default store