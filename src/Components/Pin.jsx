import React,{useState} from 'react'
import propTypes from "prop-types"
import { useRef } from 'react'
import Pinitem from './PinItem'

const Pin = ({length,setCardhandler}) => {
    const inputref=useRef([])
    const [inputboxlength] = useState(new Array(length).fill(1))
    const [inputboxvalue, setinputboxvalue] = useState(new Array(length).fill(""))
    
    

    const handlechange=(e,index)=>{
        inputboxvalue[index]=e.target.value
        setinputboxvalue(inputboxvalue)
        if(e.target.value.length>4 && index<length-1){
            inputref.current[index+1].focus()
        }
        setCardhandler(inputboxvalue.join("-"))
    }

    const handlebackspace=(e,index)=>{
        if(e.target.value.length<1 &&index>0){
        inputref.current[index-1].focus()
        }
        inputboxvalue[index]=e.target.value
        setinputboxvalue(inputboxvalue)
        setCardhandler(inputboxvalue.join(""))
    }

    const handlepaste=(e)=>{
        e.preventDefault()
        const data=e.clipboardData.getData("text").split("").filter((item,index)=>index<length)
        data.forEach((value,index)=>{
            inputboxvalue[index]=value
            inputref.current[index].value=value
            if(index<length-1){
                inputref.current[index+1].focus()
            }
            setCardhandler(inputboxvalue.join("-"))
        })
    }

  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}} onPaste={handlepaste}>
      {inputboxlength.map((item,index)=>{
        return ( 
        <Pinitem
        key={index}
        changehandler={(e)=>handlechange(e,index)}
        onbackspacehandler={(e)=>handlebackspace(e,index)}
         ref={(element)=>{
            inputref.current[index]=element
        }}
        />
        )
      })}
    </div>
  )
}

Pin.propTypes={
    length:propTypes.number,
    onChange:propTypes.func,
}

export default Pin
