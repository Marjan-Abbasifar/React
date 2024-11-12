
import { useState } from 'react';
import './App.css';
import RandomQuote from './components/quotes-app/components/RandomQuote'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[quote,setQuote] = useState("")
  const[color,setColor] = useState("bg-dark")


const quotes=[
  {
    author:"Charle Bokowski",
    content:"Find what you love and let it kill you",
    },

    {
      author:"Fyodor Dostoewsky",
      content:"Above all, don't lie to yourself",
     },

    {
        author:"Albert Camus",
        content:"You will never be happy if you continue to search for what happiness consists of",
    },

    {
          author:"John Paul Sartre",
          content:"Every existing thing born without a reason, prolongs itself out of weakness and dies by chance",
    },

    {
      author:"Gabriel Garcia Marquez",
      content:"What matters in life is not what happens to you, but what you remember and how to remember it",
    },
];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random()* quotes.length);
    const randomQuote = quotes[randomIndex];
    const randomColor = getRandomColor();
  

     setQuote(randomQuote);
     setColor(randomColor);
  }

  function getRandomColor(){
    const colors=[
      "bg-dark",
      "bg-info",
      "bg-primary",
      "bg-secondary",
      "bg-danger",
      "bg-success",
      "bg-warning",
      
    ];
    
      return colors[Math.floor(Math.random() * colors.length)];
    
  }

  
  

  return (
    <div className='container pt-2'>
       <RandomQuote quote={quote} color={color} onChangeQuote={getRandomQuote}/>
    </div>
    
  );
   
   
}

export default App;