import { useState } from "react";

export default function WrongButton (props) {
    const { content } = props

    const [clicked, setClicked] = useState(false)

    return (
        <>
            {
                clicked ?
                    <button className="wrong">
                        {content}
                    </button>
                :
                    <button onClick={() => {setClicked(true)}} className="notclicked">
                        {content}
                    </button>
            }
        </>
    )
}