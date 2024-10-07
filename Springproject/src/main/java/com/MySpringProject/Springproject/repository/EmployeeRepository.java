package com.MySpringProject.Springproject.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.MySpringProject.Springproject.entity.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee,Long>{

}
