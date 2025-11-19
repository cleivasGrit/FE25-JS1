
const student = {
    name: 'Jenny',
    courses: ['html css', 'JS1', 'Konsultrollen'],
    doHomework(course){
        console.log(`Doing ${course} homework`);
    },
    grading:{
        html: 'MVG',
        js1: 'MVG'
    }
};

console.log(student);
console.log(student.name);
console.log(student.courses[2]);
console.log(student.doHomework);

student.doHomework('JS1');

console.log(student.grading.html)
console.error('test');

const deepObj = {
    obj1: {
        arr: [2, 3, 4, 6, 8]
    },
    arr1: [
        {
            a:1,
            b: 2
        },
        {
            a: 4,
            b: 8
        }
    ]
};

console.log(deepObj.arr1[1].b)

// keyword this
const thisObject = {
    number: 90,
    logNumber(){
        console.log(this.number);
    }
}
thisObject.logNumber();
const thisObject2 = {
    number: 65,
    logNumber(){
        console.log(this.number);
    }
}
thisObject2.logNumber()