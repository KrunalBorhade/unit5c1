import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [Score,setScore] = useState(76)
  
  const [Wicket,setWicket] = useState(2)

  // const [Over,setOver] = useState(Math.floor(50/6))
  const [Over,setOver] = useState(8.2)

  const [ball,setBall] = useState(0)

  const handleChange = (value) => {
    setScore(Score+value)
    if(Score>=100){
      return 
    }
    
  }

  const handleChange1 = (value) => {
    setWicket(Wicket+value)
  }
  const handleChange2 = (value) => {
    setBall(ball+value)
    setOver(Over+Math.floor(ball/6))
  }

 
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{Score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{Wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{Over}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button  className="addScore1" onClick={()=>handleChange(1)}>Add 1</button>
        <button className="addScore4" onClick={()=>handleChange(4)}>Add 4</button>
        <button className="addScore6" onClick={()=>handleChange(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handleChange1(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handleChange2(1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      
      
    </div>
  );
}

export default App;
