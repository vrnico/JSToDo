import { Component } from '@angular/core';
import { Task } from './models/task.model'

@Component({
  selector: 'crazy-app-selector2',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  inputTask: string = prompt('Enter a new task.');
  // addTask: Task = new Task(this.inputTask);
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JS group projects'),
    new Task('Add README file to last few Angular repos on Github'),
    new Task(this.inputTask)
  ];
  // firstTask: Task = new Task("Finish weekend Angular homework for Epicodus Course");
  // console.log($tasks[0]);
}
// let inputTask: string = prompt('Enter a new task.');
// console.log(new Task(inputTask););
// new Task(inputTask);
// console.log(tasks);
