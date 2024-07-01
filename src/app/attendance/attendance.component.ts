import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  students: { id: number, name: string, status: boolean }[] = [];
  showTable: boolean = false; // Flag to toggle between edit and view mode
  action: 'take' | 'show' = 'take'; // Action indicator for current mode

  constructor() {
    // Load data from localStorage if available
    this.loadAttendanceData();
  }

  loadAttendanceData(): void {
    const studentInfo = localStorage.getItem('studinfo');
    if (studentInfo) {
      this.students = JSON.parse(studentInfo);
    } else {
      // Initialize with some default students
      this.students = [
        { id: 1, name: 'John Doe', status: false },
        { id: 2, name: 'Jane Smith', status: false },
        { id: 3, name: 'Alice Johnson', status: false },
        { id: 4, name: 'Bob Brown', status: false },
        { id: 5, name: 'Charlie Davis', status: false }
      ];
    }
  }

  toggleTable(action: 'take' | 'show'): void {
    this.action = action;
    this.showTable = true;

    if (action === 'show') {
      // Load all data from localStorage to show attendance
      this.loadAttendanceData();
    }
  }

  submit(): void {
    localStorage.setItem('studinfo', JSON.stringify(this.students));
    alert("Successfully added attendance");
    this.showTable = false; // Hide the table after submission
  }
}
