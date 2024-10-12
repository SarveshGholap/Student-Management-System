package com.crudAPI.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudAPI.example.entity.Students;
import com.crudAPI.example.repository.StudentRepo;

@Service
public class StudentService {

	@Autowired
	private StudentRepo studentrepo;
	
	public Students addStudents(Students student) {
		return studentrepo.save(student);
	}
	
	public List<Students> getAllStudents(){
		return studentrepo.findAll();
	}
	
	public Students updateStudent(Students updatedStudent) {
		Optional<Students> student1 = studentrepo.findById(updatedStudent.getId());
		Students student = student1.get();
		student.setAge(updatedStudent.getAge());
		student.setDept(updatedStudent.getDept());
		student.setName(updatedStudent.getName());
		
		return studentrepo.save(student);
	}
	
	public Boolean deleteStudent(int id) {
		studentrepo.deleteById(id);
		return true;
	}
}
