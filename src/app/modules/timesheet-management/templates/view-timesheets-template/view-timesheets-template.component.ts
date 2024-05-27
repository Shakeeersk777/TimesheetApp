import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-timesheets-template',
  templateUrl: './view-timesheets-template.component.html',
  styleUrl: './view-timesheets-template.component.scss',
})
export class ViewTimesheetsTemplateComponent implements OnInit {
  displayedColumns = ['Project', 'Task', 'Date', 'Hrs'];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatSort) sort!: MatSort;

  timesheetData = [
    { Project: 'Test 1', Task: 'Test 1', Date: 'May 20', Hrs: 20 },
    { Project: 'Test 2', Task: 'Test 1', Date: 'May 22', Hrs: 200 },
    { Project: 'Test 3', Task: 'Test 1', Date: 'May 23', Hrs: 2920 },
  ];

  ngOnInit(): void {
    this.dataSource.data = this.timesheetData;
    this.dataSource.sort = this.sort;
  }

  onSearch(event: Event){
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    console.log('this.dataSource = ',this.dataSource.filteredData);
    
  }
}
