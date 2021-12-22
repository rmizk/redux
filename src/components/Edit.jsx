import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { edit } from '../redux/action';

const Edit = ({todo}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    
    
    const dispatch = useDispatch()

    const [task, settask] = useState(todo.task)

    const handleChange = (e) =>  settask(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(edit(
            
            {
            id:todo.id,
            task,
            isdone:todo.isdone}
            ))
            handleClose()
       
    }


    return (
        <div>

            <Button variant="primary" onClick={handleShow} > Edit </Button>
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                    <Modal.Title> Edit </Modal.Title>
                    </Modal.Header>

            <Form onSubmit={handleSubmit}>
                    <Modal.Body>

                        {/* <input type="text"  value={task} onChange={(e)=>settask(e.target.value)} /> */}
                        <input type="text"  value={task} onChange={handleChange} />

        

                    </Modal.Body>
            </Form>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} > Close </Button>
                    <Button variant="primary" type="submit"   onClick={handleSubmit} > Save </Button>
                    </Modal.Footer>
                    </Modal>
            
        </div>
    )
}

export default Edit
