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
let hoursWorkedOnDate = function(employee, searchDate){
    let tInEvent = employee.timeInEvents.find(function(emps){
      return emps.date == searchDate
    })
    let tOutEvent =employee.timeOutEvents.find(function(emps){
        return emps.date == searchDate
    })
    return (tOutEvent.hour - tInEvent.hour) / 100

}
let wagesEarnedOnDate = function(employee, specDate){
    let hrWage = hoursWorkedOnDate(fun(employee, specDate)*employee.payPerHour)
    return parseFloat(hrWage.toString())
}
let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(emps){
        return emps.date
    })
    let owed = eligibleDates.reduce(function(note, m)
    {
        return note + wagesEarnedOnDate(employee, m)
    })
    return owed
}
let findByTitle= function(srcArray, title){
    return srcArray.find(function(fnde){
      return fnde.title === title
    })
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(note, fnde){
        return note + allWagesFor(fnde)
    })
}