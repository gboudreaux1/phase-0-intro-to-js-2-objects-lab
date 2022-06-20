// Write your solution in this file!

const employee = { 
    name: "Bobby",
    streetAddress: "100 Olympic Drive",
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObj = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newObj
}
    



function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}
 
function deleteFromEmployeeByKey (employee, key) {
    const newerObj = {...employee[key]}
    delete newerObj[key]
    return newerObj
}

function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key]
    return employee
}