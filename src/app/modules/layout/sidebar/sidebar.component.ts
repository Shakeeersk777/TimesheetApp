import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  currentTab: string = 'dashboard';
  constructor(private router: Router) {}
  sidebarList = [
    {
      Key: 'dashboard',
      Value: 'Dashboard',
      Icon: 'fa-solid fa-chart-line',
      url: '/app/timesheet/dashboard',
    },
    {
      Key: 'fillTimesheet',
      Value: 'Fill Timesheet',
      Icon: 'fa-regular fa-sheet-plastic',
      url: '/app/timesheet',
    },
    {
      Key: 'viewTimesheet',
      Value: 'View Timesheet',
      Icon: 'class="fa-regular fa-eye',
      url: '/app/timesheet/view-timesheet',
    },
    {
      Key: 'settings',
      Value: 'Settings',
      Icon: 'fa-light fa-gears',
      url: '/app/timesheet/settings',
    },
  ];

  isCollapsed: boolean = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onSidebarChange(sidebar: any) {
    this.currentTab = sidebar.Key;
    this.router.navigateByUrl(sidebar.url);
  }
}
