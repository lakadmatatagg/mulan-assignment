import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeadlineService } from '../headline.service';

interface Headline {
  title: string;
  link: string;
  date: string;
}

@Component({
  selector: 'app-headlines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headlines.component.html',
  styleUrl: './headlines.component.scss'
})
export class HeadlinesComponent implements OnInit {
  headlines: Headline[] = [];

  constructor(private headlineService: HeadlineService) {}

  ngOnInit(): void {
    this.headlineService.getHeadlines().subscribe((data: Headline[]) => {
      this.headlines = data;
    });
  }

}
