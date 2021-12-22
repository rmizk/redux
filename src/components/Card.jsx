import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deletetask, complete } from '../redux/action'
import Edit from './Edit'

const Card = ({todo}) => {

    const dispatch = useDispatch()
    return (
        <div>
            
            <h3 className={todo.isdone?"comp":""} >{todo.task}</h3>
            <Button variant="primary" onClick={()=>dispatch(deletetask(todo.id))} > Delete </Button>
            <Button variant="primary" onClick={()=>dispatch(complete(todo.id))} > {todo.isdone?"undo":"completed"}  </Button>


            {/* <button onClick={()=>dispatch(deletetask(todo.id))}>Delete</button>
            <button onClick={()=>dispatch(complete(todo.id))}>{todo.isdone?"undo":"completed"}</button> */}
            <Edit todo={todo}/>


            
        </div>
    )
}

export default Card
