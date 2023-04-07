import store from "../poll/store"
import CorrectButton from "./CorrectButton"
import LikeButton from "./LikeButton"
import WrongButton from "./WrongButton"

export default function Polls () {

    return (
        <>
            {
                store.map(item => (
                    <section className="poll" key={item.id}>
                        <h2>
                            {item.desc}
                        </h2>
<pre>
<code>
{item.code}
</code>
</pre>
                        <div className="options">
                            {
                                item.possibleAnswers.map(answer => (
                                    <div key={Math.random()}>
                                        {answer == item.correct ?
                                            <CorrectButton content={answer} />
                                            : 
                                            <WrongButton content={answer} />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <LikeButton />
                    </section>
                ))
            }
        </>
    )
}