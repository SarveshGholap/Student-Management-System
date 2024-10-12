import React, {useState} from "react"
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function AddStudent(){
    const [formData, setFormData] = useState ({
        id   : "",
        name : "",
        dept : "",
        age  : ""    
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(formData);

        const response = await axios.post("http://localhost:8082/addStudent",formData)
        .then(
            alert('Student added successfully')
        )
        .catch(
            alert("Error")
        )
    }

    return(
    <>
    <h1>Hello this is add student</h1>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <Form.Label>ID</Form.Label>
      <Form.Control type="text" placeholder="id" name="id" onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="id" name="name" onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>Department </Form.Label>
      <Form.Control type="text" placeholder="dept" name="dept" onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" placeholder="age" name="age"  onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Control type="submit" value={"submit"}/>
    </Form.Group>
  </Form>
  </>
    )
}
export default AddStudent;