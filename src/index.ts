
enum Status { New, Working, Closed, Rejected, Cancelled }

function getTasks() {
    let tasks = [
        { subject: 'Home page design', priority:'Normal', status: Status.Closed },  
        { subject: 'API Server deployment', priority:'High', status: Status.New },
        { subject: 'About-us page design', priority:'Normal', status: Status.Working },
        { subject: 'Email server setup', priority:'Normal', status: Status.New },
    ];

    return tasks;  
}
 
function GiveMeTask(tasks) {
    let total = tasks.length; 
    let nextTaskSubject = '';

    for (let task of tasks) {
        
        if (task.status === Status.New) {
            nextTaskSubject = task.subject;
            break;
        } 
    }

    console.log('Total tasks: ' + total);
    console.log('You will resolve task : ' + nextTaskSubject);
}


const allTasks = getTasks();
GiveMeTask(allTasks);


function getTaskSubjectsByStatus(statusToFilter: Status): Array<string> {

    console.log('Vom cauta task-urile cu statusul ' + Status[statusToFilter]);

    const tasks = getTasks();
    const found: string[] = [];

    for (let t of tasks) {
        if (t.status === statusToFilter) {
            found.push(t.subject);
        }
    }
    return found;
}

function printSubjects(subjects: string[]): void {
    for (let s of subjects) {
        console.log(s);
    }
}

const newTasks = getTaskSubjectsByStatus(Status.New);
printSubjects(newTasks);

