declare function getTasks(): {
    subject: string;
    priority: string;
    status: string;
}[];
declare function GiveMeTask(tasks: any): void;
declare const allTasks: {
    subject: string;
    priority: string;
    status: string;
}[];
