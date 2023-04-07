import { useState } from "react";

export default function CorrectButton (props) {
    const { content } = props

    const [clicked, setClicked] = useState(false)

    return (
        <>
            {
                clicked ?
                    <button className="right">
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