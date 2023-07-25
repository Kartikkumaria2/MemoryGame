import './Rules.css'
export default function RulesSection({rules,setRules}){
    let low = document.querySelector('.lower3');
    
    low.style.opacity = 0.2;
    return(
        <div className="explain">
            <ul>
                <li><p>this game is designed to test your memory using your favourite "The Office Characters!</p></li>
                <li><p>You have to select a character in each turn but beware you have to select a unique character EVERYTIME</p></li>
                <li><p>Reach 12 points to win the game</p></li>
                <button onClick={()=>{
                    setRules(0);
                    low.style.opacity = 1;
                }}>Ok</button>
            </ul>
        </div>
    )
}