import { Component } from '@angular/core';
import { SummaryService } from '../services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage {
  articleText: string = '';
  summary: string | null = null;

  constructor(private summaryService: SummaryService) {}

  generateSummary() {
    if (this.articleText.trim()) {
      this.summaryService.summarizeText(this.articleText).subscribe(
        (response) => {
          this.summary = response.summary;
        },
        (error) => {
          console.error('Erro ao gerar resumo:', error);
        }
      );
    }
  }
}
