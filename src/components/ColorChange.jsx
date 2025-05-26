import React, { useState, useRef } from 'react'
import './ColorChange.css'

const ColorChange = () => {

    const getRandomColor=()=>{
        //Math.random()로 숫자를 랜덤 생성, #과 16진수의 문자열로 만든다. 이때 채워지지 않은 문자열 자리에는 0을 자동으로 채운다.
        const randomColor='#'+Math.random().toString(16).slice(2, 8).padEnd(6, '0')
        return randomColor
    }
    // bgColor에 useState를 통해 값 넣기
    const [bgColor, setBgColor]=useState(getRandomColor())
    const [isPlaying, setIsPlaying]=useState(false)
    const intervalRef = useRef(null)

    const startBgChange=()=>{
        if(!intervalRef.current){
            intervalRef.current=setInterval(()=> {
                setBgColor(getRandomColor())
            }, 2000)
            setIsPlaying(true)
        }
    }
    const stopBgChange=()=>{
        if(intervalRef.current){
            clearInterval(intervalRef.current)
            intervalRef.current=null
            setIsPlaying(false)
        }
    }
    
    return (
        // style를 통해 backgroundColor에 값 넣기
        <div className='bg-container' style={{backgroundColor:bgColor}}>
            <h1 className='color-code'>{bgColor.toUpperCase()}</h1>
            <div className="button-group">
                <button
                onClick={startBgChange}
                className="control-button"
                disabled={isPlaying}
                >
                    play</button>
                <button 
                onClick={stopBgChange}
                className="control-button"
                disabled={!isPlaying}
                >
                    stop</button>
            </div>
        </div>
    )
}

export default ColorChange