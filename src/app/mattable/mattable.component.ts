import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-mattable',
  templateUrl: './mattable.component.html',
  styleUrls: ['./mattable.component.css']
})
export class MattableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  students: {id:number,name:string,status:boolean;}[] = [];
  showTable: boolean = false;
  action: 'take' | 'show' = 'take';
  displayedColumns: string[] = ['id', 'name', 'status'];
  dataSource: MatTableDataSource<{id:number,name:string,status:boolean;}>;

  constructor() {
    this.dataSource = new MatTableDataSource(this.students);
    this.loadAttendanceData();
  }

  loadAttendanceData(): void {
    const studentInfo = localStorage.getItem('studinfo');
    if (studentInfo) {
      this.students = JSON.parse(studentInfo);
      this.dataSource.data = this.students.slice(0, 5); // Display only the first 5 records initially
      console.log(studentInfo);
    }

    // When showing attendance, ensure checkboxes reflect student status
    if (this.action === 'show') {
      this.students.forEach(student => {
        // Set status to true for present students
        student.status = student.status === undefined ? false : student.status;
         
      });
    }
  }

  toggleTable(action: 'take' | 'show'): void {
    this.action = action;
    this.showTable = true;
    if (action === 'show') {
      this.loadAttendanceData();
    } else if (action === 'take') {
      // Ensure all checkboxes are unchecked initially when taking attendance
      this.students.forEach(student => student.status = false);
      // Display only the first 5 records
      this.dataSource.data = this.students.slice(0, 5);
    }
  }

  onPageChange(event: any): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataSource.data = this.students.slice(startIndex, endIndex);
  }

  submit(): void {
    localStorage.setItem('studinfo', JSON.stringify(this.students));
    alert("Successfully added attendance");
    this.showTable = false;
  }
}
