import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from  '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // To use a Service we have to add it as provider to the constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Way to work with observables     (return val)
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks); // tasks of current object = tasks returned by observable
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
    .subscribe( // Subscribe is like .then in promises
      // Filter all tasks not equal to the deleted task
      () => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

}
