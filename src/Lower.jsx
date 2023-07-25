import './Lower.css';
import Cards from './Cards';
import { useEffect, useState } from "react";
import RulesSection from './Rules';

export default function Lower(){
    const randomizer = (MainData)=>{
        const newArray = [...MainData];
    for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
    }

    const handleClick = (event) => {
        let parent = event.target.parentNode;
        let value = parent.getAttribute("attri");
        let dummy = clicked;

        if (clicked.includes(value)) {
            setClicked([]),
            setCount(0);
            alert('Oops you clicked on a previously clicked character')
          console.log("yes");
        } else {
            setCount(count+1);
            if(highScore<count+1){
                setHighScore(count+1);
            }
            if(count+1==12){
                alert('Congrats you won')
                setClicked([]),
            setCount(0);
            return;
            }
            dummy.push(value);
          setClicked(dummy);

          setdata((prevData) => {
            const newArray = randomizer(prevData);
            return newArray;
          });
          console.log(MainData);
        }
      };
      
    
    const data = ["Jim Halpert","Pam Beesly","Dwight Shrute","Michael Scott","Meredith","Darryl Philbin","Stanley Hudson","Angela Martin",
    "Kelly Kapoor","Ryan Howard","Kevin Malone","Andy Bernard"];
    const [clicked,setClicked] = useState([])
    const [count, setCount] = useState(0);
    const [display,setdisplay] = useState([]);
    const [MainData,setdata] = useState(data);
    const [highScore,setHighScore] = useState(0);
    const [rules,setRules] = useState(1);
return(
    <div className="lower">
        <div className="lower1">
        <button id = "Rules" onClick = {()=>{setRules(1)}}>Rules</button>
        <div className="lower2">
            <h2>Score:{count}</h2>
            <h2>High Score:{highScore}</h2>
        </div>
        </div>
        <div className="lower3">
            <Cards handleClick = {handleClick} display = {display} MainData = {MainData} setdisplay = {setdisplay} setdata={setdata}/>
            
        </div>
        {rules===1 &&document.querySelector('.lower3')!==null?(<RulesSection rules = {rules} setRules = {setRules}/>):null}
    </div>
)

}