package com.MySpringProject.Springproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MySpringProject.Springproject.entity.Employee;
import com.MySpringProject.Springproject.repository.EmployeeRepository;

@Service
public class EmployeeService {
	@Autowired
	private EmployeeRepository repo;
	
	public Iterable<Employee> listAll(){
		return this.repo.findAll();
	}
	
	public void saveOrUpdate(Employee employees) {
		repo.save(employees);
	}
	
		public Employee getEmployeeById(long id) {
			return repo.findById(id).get();
		}
		
		public void update(Employee employees,int id) {
			repo.save(employees);
		}
		
		public Employee get(long id) {
			return repo.findById(id).get();
		}
		public void delete(long id) {
			repo.deleteById(id);
		}
}
