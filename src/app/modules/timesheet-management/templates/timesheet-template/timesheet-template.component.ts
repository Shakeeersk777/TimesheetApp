import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import moment from 'moment';
interface ITasks {
  TaskID: number;
  TaskName: string;
}
@Component({
  selector: 'app-timesheet-template',
  templateUrl: './timesheet-template.component.html',
  styleUrl: './timesheet-template.component.scss'
})
export class TimesheetTemplateComponent  implements OnInit{
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  currentWeekStartDate!: moment.Moment;

  timesheetData = [
    {
      TaskID: 1,
      TaskName: 'Task 1',
      Date: '19-05-2024',
      Hrs: 12,
    },
    {
      TaskID: 2,
      TaskName: 'Task 2',
      Date: '20-05-2024',
      Hrs: 7,
    },
    {
      TaskID: 2,
      TaskName: 'Task 3',
      Date: '21-05-2024',
      Hrs: 6,
    },
  ];
  selectedProjectId = 0;
  projectList = [
    {
      ProjectID: 1,
      ProjectName: 'Project 1',
      TaskIDs: [1, 2],
    },
    {
      ProjectID: 2,
      ProjectName: 'Project 2',
      TaskIDs: [1],
    },
    {
      ProjectID: 3,
      ProjectName: 'Project 3',
      TaskIDs: [1, 2, 3],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.selectedProjectId = this.projectList[0].ProjectID;
    this.currentWeekStartDate = moment().startOf('week');
    this.generateWeekData(this.currentWeekStartDate);
  }

  onProjectChange(e: any) {
    const project = this.projectList.find((p) => p.ProjectID === e.value);
    this.selectedProjectId = e.value
    this.generateWeekData(this.currentWeekStartDate);
  }

  generateWeekData(startDate: moment.Moment) {
    if (!this.selectedProjectId) {
      this.dataSource.data = [];
      return;
    }

    const selectedProject = this.projectList.find(
      (project) => project.ProjectID === this.selectedProjectId
    );
    if (!selectedProject) {
      this.dataSource.data = [];
      return;
    }

    const filteredTaskIDs = selectedProject.TaskIDs;
    const filteredTimesheetData = this.timesheetData.filter((entry) =>
      filteredTaskIDs.includes(entry.TaskID)
    );

    this.displayedColumns = ['Task']; // Initialize with 'Task' column
    const headerRow: any = { Task: 'Task' };

    // Generate header row
    for (let i = 0; i < 7; i++) {
      const currentDate = startDate.clone().add(i, 'days');
      const dateKey = currentDate.format('DD-MM-YYYY');
      this.displayedColumns.push(dateKey); // Add date to displayedColumns
      headerRow[dateKey] = currentDate.format('DD MMM, YYYY dddd'); // Add date to headerRow
    }
    this.displayedColumns.push('Save');

    const weekData: any[] = [];

    // Generate data rows
    filteredTimesheetData.forEach((entry) => {
      const rowData: any = { Task: entry.TaskName };
      for (let j = 0; j < 7; j++) {
        const currentDate = startDate.clone().add(j, 'days');
        const dateKey = currentDate.format('DD-MM-YYYY');
        if (entry.Date === dateKey) {
          rowData[dateKey] = entry.Hrs; // Assign hours if matching entry found
        } else {
          rowData[dateKey] = ''; // Leave empty if no matching entry found for the date
        }
      }
      weekData.push(rowData);
    });

    this.dataSource.data = weekData; // Assign data to dataSource

    console.log('headerRow = ', headerRow);
  }

  prevWeek() {
    this.currentWeekStartDate.subtract(7, 'days');
    this.generateWeekData(this.currentWeekStartDate);
  }

  nextWeek() {
    this.currentWeekStartDate.add(7, 'days');
    this.generateWeekData(this.currentWeekStartDate);
  }

  // Method to check if a column represents a date
  isDateColumn(column: string): boolean {
    return /^\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}$/.test(column);
  }
}
