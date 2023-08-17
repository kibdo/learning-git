const currentDate = new Date();
class Student{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
class Attendance{
    constructor(title, date=currentDate){
        this.title = title
        this.date = date
        this.present = []
        this.absent = []
    }
    markPresent(student){
        this.present.push(student)
    }
    markAbsent(student){
        this.absent.push(student)
    }
    getFullList(){
        let fullList = [...this.present, ...this.absent]
        fullList.sort((a, b) => a.name.localeCompare(b.name))
        let string = fullList.map((element, index) => {
            return `${index+1}. ${element.name} - ${this.present.includes(element) == true ? "Present" : "Absent"}`
        })
        return string
    }
}

module.exports = {
    Attendance: Attendance,
    Student:Student
}