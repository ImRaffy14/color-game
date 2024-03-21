import React, { useState, useEffect } from 'react';

function Game() {
    const [pickedColor, setPickedColor] = useState('');
    const [pickedColor2, setPickedColor2] = useState('');
    const [pickedColor3, setPickedColor3] = useState('');
    const [collectColor, setCollectColor] = useState('');
    const [collectColor2, setCollectColor2] = useState('');
    const [collectColor3, setCollectColor3] = useState('');
    const [saveColor, setSaveColor] = useState('');
    const [buttonElement, setButtonElement] = useState(false);
    const [text, setText] = useState('Please select color first.');

    const colors = ['RED', 'BLUE', 'GREEN', 'WHITE', 'YELLOW', 'PINK'];

   
   
    function isButtonClicked(){
        if(!buttonElement){
             setButtonElement(true)
        }   
    }

    function redPicked(){
        setSaveColor('RED')
        isButtonClicked()
    }

    function bluePicked(){
        setSaveColor('BLUE')
        isButtonClicked()
    }

    function whitePicked(){
        setSaveColor('WHITE')
        isButtonClicked()
    }

    function greenPicked(){
        setSaveColor('GREEN')
        isButtonClicked()
    }

    function yellowPicked(){
        setSaveColor('YELLOW')
        isButtonClicked()
    }

    function pinkPicked(){
        setSaveColor('PINK')
        isButtonClicked()
    }

    const randomColor = () => {
        setButtonElement(false)
        setText(`YOU PICKED: ${saveColor}`)
        const intervalId = setInterval(() => {
            const generateColor = Math.floor(Math.random() * colors.length);
            const colorGenerated = colors[generateColor];
            setPickedColor(colorGenerated);
        }, 1);

        const intervalId2 = setInterval(() => {
            const generateColor2 = Math.floor(Math.random() * colors.length);
            const colorGenerated2 = colors[generateColor2];
            setPickedColor2(colorGenerated2);
        }, 1);

        const intervalId3 = setInterval(() => {
            const generateColor3 = Math.floor(Math.random() * colors.length);
            const colorGenerated3 = colors[generateColor3];
            setPickedColor3(colorGenerated3);
        }, 1);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 1000);

        setTimeout(() => {
            clearInterval(intervalId2);
        }, 3000);

        setTimeout(() => {
            clearInterval(intervalId3);
        }, 5000);
    };
    
    useEffect(() => {
        if(pickedColor !== ''){

            const timeoutId = setTimeout(() => {
                setCollectColor(pickedColor);
                console.log(pickedColor);               
            }, 1100); 
            return () => clearTimeout(timeoutId);

        }
       
    }, [pickedColor]); 

    useEffect(() => {
        if(pickedColor2 !== ''){

            const timeoutId = setTimeout(() => {
                setCollectColor2(pickedColor2);
                console.log(pickedColor2)
            }, 1100); 
            return () => clearTimeout(timeoutId);
        }
        
    }, [pickedColor2]); 

    useEffect(() => {
        if(pickedColor3 !== ''){
            const timeoutId = setTimeout(() => {
                setCollectColor3(pickedColor3);
                console.log(pickedColor3)
            }, 1100); 
            return () => clearTimeout(timeoutId);

        }
       
    }, [pickedColor3]); 

    useEffect(() => {
        if(pickedColor3 !== ''){
            const timeoutId = setTimeout(() => {
                if(saveColor === collectColor){
                    if(saveColor === collectColor && saveColor === collectColor2  && saveColor === collectColor3){
                        alert('YOU WON 3x!!!')
                    }
                    else if((saveColor === collectColor && saveColor === collectColor2) || (saveColor === collectColor && saveColor === collectColor3)){
                        alert('YOU WON 2x!!')
                    }
                    else{
                        alert('YOU WON!')
                    }
                }

                else if (saveColor === collectColor2){
                    if(saveColor === collectColor && saveColor === collectColor2  && saveColor === collectColor3){
                        alert('YOU WON 3x!!!')
                    }
                    else if((saveColor === collectColor && saveColor === collectColor2) || (saveColor === collectColor && saveColor === collectColor3)){
                        alert('YOU WON 2x!!')
                    }
                    else{
                        alert('YOU WON!')
                    }
                }
                else if (saveColor === collectColor3){
                    if(saveColor === collectColor && saveColor === collectColor2  && saveColor === collectColor3){
                        alert('YOU WON 3x!!!')
                    }
                    else if((saveColor === collectColor && saveColor === collectColor2) || (saveColor === collectColor && saveColor === collectColor3)){
                        alert('YOU WON 2x!!')
                    }
                    else{
                        alert('YOU WON!')
                    }
                }
                else{
                    alert('YOU LOSE!')
                }
                setButtonElement(false);
                setText('Please select color first.')
            }, 1100); 
            return () => clearTimeout(timeoutId);

        }
       
    }, [collectColor3]); 

    return (
        <>  
           
            <div className="card-container">
                <div className="card" style={{backgroundColor: pickedColor,}}><h2>{pickedColor}</h2></div>
                <div className="card2" style={{backgroundColor: pickedColor2,}}><h2>{pickedColor2}</h2></div>
                <div className="card3" style={{backgroundColor: pickedColor3,}}><h2>{pickedColor3}</h2></div>
            </div>

            <div className="container">
                <div>{buttonElement ? <button className="button" onClick={randomColor}>Play</button> : <h3>{text}</h3> }</div>
            </div>

            <div className="container">
                <div className="pick-card" onClick={redPicked} style={{backgroundColor: 'red',}}></div>
                <div className="pick-card" onClick={bluePicked} style={{backgroundColor: 'blue',}}></div>
                <div className="pick-card" onClick={whitePicked} style={{backgroundColor: 'white',}}></div>
            </div>

            <div className="container">
                <div className="pick-card" onClick={greenPicked} style={{backgroundColor: 'green',}}></div>
                <div className="pick-card" onClick={yellowPicked} style={{backgroundColor: 'yellow',}}></div>
                <div className="pick-card" onClick={pinkPicked} style={{backgroundColor: 'pink',}}></div>
            </div>
        
        </>
    );
}

export default Game
