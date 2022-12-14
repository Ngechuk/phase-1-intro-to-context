// Your code here
const createEmployeeRecord = function(row){
    return {firstName: row[0],
           familyName: row[1],
           title:row[2],
           payPerHour:row[3],
           timeInEvents:[],
           timeOutEvents:[]

    }
} 
const createEmployeeRecords = function(employeeData) {
    return employeeData.map(function(row){
        return createEmployeeRecord(row)
    })
}
let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}
let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}
let hoursWorkedOnDate = function(employee, searchDate){
    let tInEvent = employee.timeInEvents.find(function(e){
      return e.date == searchDate
    })
    let tOutEvent =employee.timeOutEvents.find(function(e){
        return e.date == searchDate
    })
    return (tOutEvent.hour - tInEvent.hour) / 100

}
let wagesEarnedOnDate = function(employee, specDate){
    let hrWage = hoursWorkedOnDate(employee, specDate)*employee.payPerHour
    return parseFloat(hrWage.toString())
}
let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })
    let owed = eligibleDates.reduce(function(note, m)
    {
        return note + wagesEarnedOnDate(employee, m)
    }, 0)
    return owed
}
let findByFirstName= function(srcArray, firstName){
    return srcArray.find(function(prec){
      return prec.firstName === firstName
    })
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(note, prec){
        return note + allWagesFor(prec)
    }, 0)
}
