package com.MySpringProject.Springproject.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

@Entity
@Table(name="Records")
public class Employee {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@Column(name="Name")
	private String Name;
	
	@Column(name="City")
	private String City;
	
	@Column(name="Phone")
	private String Phone;
	
	@Column(name="Salary")
	private String Salary;


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String Name) {
		this.Name = Name;
	}

	public String getCity() {
		return City;
	}

	public void setCity(String City) {
		this.City = City;
	}

	public String getPhone() {
		return Phone;
	}

	public void setPhone(String Phone) {
		this.Phone = Phone;
	}

	public String getSalary() {
		return Salary;
	}

	public void setSalary(String Salary) {
		this.Salary = Salary;
	}
}
