// Your code here
const createEmployeeRecord = function(){
    return {firstName:[0],
           familyName:[1],
           title:[2],
           payPerHour:[3],
           timeInEvents:[],
           timeOutEvents:[]

    }
} 
const createEmployeeRecords = function(employeeData) {
    return employeeData.map(function(){
        return createEmployeeRecord
    })
}
let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split("")
    employee.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(hour,7), date
    })
    return employee
}
