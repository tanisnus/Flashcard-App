import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './Components/Flashcard'

function App() {
  // const [count, setCount] = useState(0)

  const flashcardsData = [
    { id:1, question: "What is React component?", answer: 'React Component is a function that returns JSX'},
    { id:2, question: "What is Props?", answer: 'In React, props (short for "properties") are used to pass data from one component to another. Props are read-only, meaning a component receiving props cannot modify them. This is how data flows from a parent component to a child component, making it easier to create dynamic and reusable components.'},
    { id:3, question: "What is State?", answer: "Can be thought of as a component's memory"}
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex+1) % flashcardsData.length);
  }

  // const nextRandomFlashcard = () => {
  //   let random_index;
  //   do
  //   {
  //     random_index = Math.floor(Math.random) * flashcardsData.length;

  //   }
  //   while (random_index === currentIndex);
  //   setCurrentIndex(random_index);
  // }
  
  return (
    <div className="app-container">
      <h2> The Ultimate Plant Parent!</h2>
      <h4> How good of a plant parent are you? Test all of your planty knowledge here! </h4>
      <h4> Number of cards: 10</h4>
      <br></br>
      <Flashcard
        question={flashcardsData[currentIndex].question}
        answer={flashcardsData[currentIndex].answer}
      />

      <br></br>
      <button onClick={nextFlashcard}> Next Card </button>

    </div>

  )
}

export default App
