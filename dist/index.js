"use strict";
// 1.A
/*
let s = "Text";  // s va avea tipul string
s = 100; // eroare

function Fn() { return 200; }
let s1 = "s1 va avea tipul string";
s1 = Fn();  // eroare
 */
//  1.B (-1.A)
/*
let s: string = "Text";  // s va avea tipul string
s = 100; // eroare

function Fn(): number { return 200; }
let s1: string = "s1 va avea tipul string";
s1 = Fn();  // eroare
 */
// 2 (-1.A -1.B)
function getTasks() {
    let tasks = [
        { subject: 'Home page design', priority: 'Normal', status: 'Closed' },
        { subject: 'API Server deployment', priority: 'High', status: 'New' },
        { subject: 'About-us page design', priority: 'Normal', status: 'Rejected' },
        { subject: 'Email server setup', priority: 'Normal', status: 'New' },
    ];
    return tasks;
}
// 3
function GiveMeTask(tasks) {
    let total = tasks.length;
    let nextTaskSubject = '';
    for (let task of tasks) {
        //*1 let nextTaskSubject = ''; 
        if (task.status === 'New') {
            nextTaskSubject = task.subject;
            break;
        }
    }
    console.log('Total tasks: ' + total);
    console.log('You will resolve task : ' + nextTaskSubject);
}
const allTasks = getTasks();
GiveMeTask(allTasks);
//# sourceMappingURL=index.js.map