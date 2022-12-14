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
