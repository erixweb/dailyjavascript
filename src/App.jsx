import Polls from "./components/Polls"

function App() {

  return (
    <>
      <header>
        <div>
          <h1>
            DailyJavaScript
          </h1>
          <p>
            DailyJavaScript es una aplicación en español con cosas extrañas que pasan en JavaScript.
          </p>
        </div>
      </header>
      <main>
        <Polls />
      </main>
    </>
  )
}

export default App
