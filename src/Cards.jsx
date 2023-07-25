import { useEffect, useState } from "react";
import './Cards.css'


export default function Cards({handleClick,display,MainData,setdisplay,setdata}){

    

    
    
    useEffect(() => {
        const fetchGifs = async () => {
            
            let useData = [];
            for(let i=0;i<10;i++){
                useData.push(MainData[i]);
            }
            
            const gifData = await Promise.all(useData.map(async (fname) => {
              
              let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=GvIidg8xQlJH66jppwJTKL7FV01IoRXX&q=${fname}&limit=5`);
              let fetchedData = await response.json();
              if(fetchedData["data"].length==0){
                fetchedData.data[0].images.original.url = `./assets/${fname}.jpeg`
                console.log(fetchedData)
              }
              
              const randomIndex = await Math.floor(Math.random() * fetchedData.data.length);
              return { [fname]: fetchedData.data[randomIndex].images.original.url };
        }));
          
            setdisplay(gifData);
          };
          
    
        fetchGifs();
        
      }, [MainData]);
    
    

    
   

  
      return (
        <>
          {display.map((element) => (
            <div className="cards" key={Object.keys(element)[0]} attri={Object.keys(element)[0]} onClick={handleClick}>
              <img src={element[Object.keys(element)[0]]} alt={Object.keys(element)[0]} />
              <p>{Object.keys(element)[0]}</p>
            </div>
          ))}
        </>
      );
      
}
