package com.crudAPI.example.controller;

import org.springframework.web.bind.annotation.RestController;

import com.crudAPI.example.entity.Students;
import com.crudAPI.example.service.StudentService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class StudentController {

	@Autowired
	private StudentService studentservice;
	
	@PostMapping("/addStudent")
	@CrossOrigin(origins = "http://localhost:3000")
	public Students addStudent(@RequestBody Students students) {
		return studentservice.addStudents(students);
	}
	
	@GetMapping("/getStudents")
	@CrossOrigin(origins = "http://localhost:3000")
		public List<Students> getAllStudents(){
			return studentservice.getAllStudents();
		}
	
	@PostMapping("/updateStudent")
	@CrossOrigin(origins = "http://localhost:3000")
	public Students updateStudent(@RequestBody Students students) {
		return studentservice.updateStudent(students);
	}
	
	@GetMapping("/deleteStudent/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	public Boolean deleteStudent(@PathVariable int id) {
		return studentservice.deleteStudent(id);
	}
	
}
