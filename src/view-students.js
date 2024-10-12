import React,{useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";

function ViewStudent(){

    const [selectedStudent,setSelectedStudent] = useState({
        id: "",
        name:"",
        age:"",
        dept:""
    });
    

    const [students, setStudents] = useState([]);
    const [isFormOpen, setFormOpen] = useState(false);

    useEffect(()=>{
        fetchStudent();
    },[]);

    const fetchStudent = async() =>{
        const baseURL = "http://localhost:8082/getStudents";
        const response = await axios.get(baseURL);
        setStudents(response.data);
    };

    const deleteStudent = async(id) => {
        const baseURL = "http://localhost:8082/deleteStudent/" + id;
        await axios.get(baseURL);
        fetchStudent();
    }

    const handleUpdate = (student) => {
        setSelectedStudent(student);
        setFormOpen(true);
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setSelectedStudent({...selectedStudent,[name]: value})
    }

    const updateStudent = async() => {
        const baseURL = "http://localhost:8082/updateStudent";
        const response = await axios.post(baseURL,selectedStudent);
        isFormOpen(false);
        fetchStudent();
    }

    return(
        <>
    <h1>This is students table</h1>
       <table>
        <thead>
            <tr>
               <th>id</th>
               <th>name</th>
               <th>age</th>
               <th>dept</th> 
            </tr>
        </thead>
        <tbody>
             {students.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.dept}</td>
                        <th>{<button onClick={() => deleteStudent(item.id)}>Delete</button>}</th>
                        <th>{<button onClick={() => handleUpdate(item)}>Update</button>}</th>
                    </tr>
                ))}
        </tbody>
       </table>
       {isFormOpen && <Form onSubmit={updateStudent}>
    <Form.Group className="mb-3">
      <Form.Label>ID</Form.Label>
      <Form.Control type="text" placeholder="id" name="id" value={selectedStudent.id} onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="id" name="name" value={selectedStudent.name} onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>Department </Form.Label>
      <Form.Control type="text" placeholder="dept" name="dept" value={selectedStudent.dept} onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Label>Age</Form.Label>
      <Form.Control type="text" placeholder="age" name="age" value={selectedStudent.age} onChange={handleChange}/>
    </Form.Group>
    <br></br>
    <br></br>
    <Form.Group className="mb-3">
      <Form.Control type="submit" value={"submit"}/>
    </Form.Group>
  </Form>}
       </> 
    )
}
export default ViewStudent;