// Write your solution in this file!

 let employee = {
name: "Ramsey Anyona",
age: 19,
department: "Software Engineering",
skills: ["HTML", "CSS", "Javascript"]
}
function displayEmployeeInfo(employee) {
console.log("Employee Name: " + employee.name)
console.log("Employee Age: " + employee.age)
console.log("Employee Department: " +employee.department)
console.log("Employee SKills: " + employee.name)
console.log("Employee Skills: " + employee.skills)
}
displayEmployeeInfo(employee)

function addskill(employee, skill) {
employee.skills.push(skill)
console.log("Updated Skills: " + employee.sklls)
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value
return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}   
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}       

