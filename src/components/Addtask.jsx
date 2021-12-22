import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addtask } from "../redux/action"



const Addtask = ({change}) => {

    console.log(change)

    const dispatch = useDispatch()

    const [Addtask, setAddtask] = useState("")

    const handleInput = (e) =>  setAddtask(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addtask({id:Math.random(),task:Addtask,isdone:false}))

        setAddtask("")
       
    }



    return (
        <div>

            
           <form onSubmit={handleSubmit}>
               <input type="text" onChange={handleInput} value={Addtask}/>
               <Button variant="primary" type="submit" > Add </Button>
               {/* <button   >add</button> */}
           </form>

           
            
            <Button variant="primary" onClick={change} > filtre </Button>

            
        </div>
    )
}

export default Addtask
