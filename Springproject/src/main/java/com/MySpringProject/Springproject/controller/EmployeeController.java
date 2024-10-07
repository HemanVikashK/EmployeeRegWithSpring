package com.MySpringProject.Springproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.MySpringProject.Springproject.entity.Employee;
import com.MySpringProject.Springproject.service.EmployeeService;

@RestController
public class EmployeeController {
	@Autowired
	private EmployeeService services;
	
	@GetMapping("/")
	public Iterable<Employee> getEmployee(){
		return services.listAll();
	}
	
	@PostMapping(value = "/add" )
	private long saveBook(@RequestBody Employee employees) {
		services.saveOrUpdate(employees);
		return employees.getId();
	}
	
	@RequestMapping("/employee/{id}")
	private Employee getEmployee(@PathVariable(name="id")int employeeId) {
		return services.getEmployeeById(employeeId);
	}
	
	@PutMapping("/edit/{id}")
	private Employee update(@RequestBody Employee employee,@PathVariable int id) {
		employee.setId(id);
		services.saveOrUpdate(employee);
		return employee;
	}
	
	@DeleteMapping("/delete/{id}")
	private Employee delete(@PathVariable("id") int id) {
		Employee employee=services.get(id);
		services.delete(id);
		return employee;
	}
	
	
	
}
