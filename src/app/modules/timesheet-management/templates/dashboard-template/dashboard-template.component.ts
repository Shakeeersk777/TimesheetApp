import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrl: './dashboard-template.component.scss',
})
export class DashboardTemplateComponent implements OnInit {
  ngOnInit(): void {
    const data = {
      labels: ['jan', 'feb', 'march', 'apr', 'may'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgb(255, 99, 132)'],
          borderWidth: 1,
        },
      ],
    };

    const doughnutConfig: any = {
      type: 'doughnut',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const barConfig: any = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    new Chart('bar-chart', barConfig);
    new Chart('pie-chart', doughnutConfig);
  }
}
