// var calc = require("./calc");

// result = calc.add(16, 4);
// console.log(result);

// result = calc.sub(16, 4);
// console.log(result);

// result = calc.mul(16, 4);
// console.log(result);

// result = calc.div(16, 4);
// console.log(result);

// const express = require('express');
// const calculator = require('./calc');

// const app = express();
// const port = 4000;

// // Add route for addition
// app.get('/add/:a/:b', (req, res) => {
//   const result = calculator.add(a,b);
//   res.send('Result: ' + result);
// });

// // Add route for subtraction
// app.get('/sub/:a/:b', (req, res) => {
//   const result = calculator.sub(a,b);
//   res.send('Result: ' + result);
// });

// // Add route for multiplication
// app.get('/mul/:a/:b', (req, res) => {
//   const result = calculator.mul(a,b);
//   res.send('Result: ' + result);
// });

// // Add route for division
// app.get('/div/:a/:b', (req, res) => {
//   const result = calculator.div(a,b);
//   res.send('Result: ' + result);
// });

// app.listen(port, () => {
//   console.log(`Calculator app listening at http://localhost:${port}`);
// });


// app.use(express.json())
// const employees = [
//     {
            
//     }
// // 
// const express = require('express')
// const app = express();

// app.use(express.json())
// const courses = [
//     { id:1, name:'Data Analytics'},
//     { id:2, name:'Data Engineering'},
//     { id:3, name:'Data Science'},
// ]
// app.get('/',  (req, res)=>{
//   res.send('Hello World');
// }).listen(8000)

// app.get('/courses',  (req, res)=>{
//     res.send(courses);
//   })


//   app.post('/courses', (req,res)=>{
//     const course ={
//     id:courses.length+1,
//     name: req.body.name
//   }

// courses.push(course)
// req.send(course)
// })

// app.get('/courses/contact',  (req, res)=>{
//     res.send('Contact Rise risbah software vadodara');
//   })
// app.listen(3000)

// const express = require('express');
// const app = express();

// app.use(express.json());

// const courses = [
//     { id: 1, name: 'Data Analytics' },
//     { id: 2, name: 'Data Engineering' },
//     { id: 3, name: 'Data Science' },
// ];

// // Define routes
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/courses', (req, res) => {
//     res.send(courses);
// });

// app.post('/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };

//     courses.push(course);
//     res.send(course);
// });

// app.get('/courses/contact', (req, res) => {
//     res.send('Contact Rise risbah software vadodara');
// });

// app.put('/courses/:id', (req, res) => {
//     const course = courses.find(c=> c.id===parseInt(req.params.id) )
//     course.name = req.body.name
//     res.send(course)    
// });

// app.delete('/courses/:id', (req, res) => {
//     const course = courses.find(c=> c.id===parseInt(req.params.id ) )
//     const index = courses.indexOf(course)
//     courses.splice(index,1)
//     res.send(course)
// });
//     node modules architecture
//     json document 
//     routes 

// asynchronous multi threaded
// sync single threaded
// io intensive 
// // not cpu intensive
// event on is a call back function and for handling
// event omit to trigger an event
const Joi = require('joi');

const employeeSchema = Joi.object({
    name: Joi.string().required(),
    department: Joi.string().required()
});

const express = require('express');
const app = express(); 

app.use(express.json());

const employees = [
    { empid: 1, name: 'Deep', department: 'HOD' },
    { empid: 2, name: 'Rohit', department: 'Manager' },
    { empid: 3, name: 'Abhishekh', department: 'IT Expert' },
    { empid: 4, name: 'Suvid', department: 'IT Manager' },
];

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get all employees
app.get('/employees', (req, res) => {
    res.send(employees);
});

// Add a new employee
app.post('/employees', (req, res) => {
    const employee = {
        empid: employees.length + 1,
        name: req.body.name,
        department: req.body.department
    };

    employees.push(employee);
    res.send(employee);
});

// Update an employee
app.put('/employees/:empid', (req, res) => {
    const employee = employees.find(e => e.empid === parseInt(req.params.empid));
    // if (!employee) return res.status(404).send('Employee not found');
    employee.name = req.body.name;
    employee.department = req.body.department;
    res.send(employee);
});

// Delete an employee
app.delete('/employees/:empid', (req, res) => {
    const employeeIndex = employees.findIndex(e => e.empid === parseInt(req.params.empid));
    // if (employeeIndex === -1) return res.status(404).send('Employee not found');
    const deletedEmployee = employees.splice(employeeIndex, 1);
    res.send(deletedEmployee);
});

app.patch('/employees/:empid', (req, res) => {
    const employeeIndex = employees.findIndex(e => e.empid === parseInt(req.params.empid));
    res.send(employees[employeeIndex]);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



// app.delete('/courses/:id', (req, res) => {
//     const courseId = parseInt(req.params.id); // Extracting the course ID from the URL parameters
    
    // Find the index of the course with the given ID
//     const index = courses.findIndex(course => course.id === courseId);
    
//     if (index !== -1) {
//         // Remove the course from the array
//         courses.splice(index, 1);
//         res.send(`Course with ID ${courseId} deleted successfully.`);
//     } else {
//         res.status(404).send(`Course with ID ${courseId} not found.`);
//     }
// });

// Start the server



// students details id name subject 
// // contact us route 
//  empid name dept
// post add data empid name dept

// INTERVIEW Questions*************
// by default which parmter node js usses - Asynchronous
// Difference betw PUT and patch - put is 
// synch vs asynch
// non blocking vs aynch
// modules in node ( fs,os,http)
// event module(IMPPPP), import exoort
// basic working with node
// calculator
// routes how to create
