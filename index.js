// Write your solution in this file!
Kisii: "Migan Mutisya,"
Kakamega:"Nixxie Mwelu,"
Machakos:"Sasha Sampeiyan,"
Jericho:"Mark Odera,"
Somalia:"Gatete Njoroge,"


function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee}
    newEmployee[key]=value
    return newEmployee
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeBykey(employee,key){
let newEmployee=(employee,'name')
delete newemployee[key]
return newEmployee


}
function destructivelyDeleteFromEmployeeByKey(employe,key){
    let employee=(employee,'name')
    delete employee.Machakos
    return employee
}