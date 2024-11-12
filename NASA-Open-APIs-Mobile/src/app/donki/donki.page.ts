import { Component, OnInit } from '@angular/core';
import { DonkiService } from '../services/donki.service';

@Component({
  selector: 'app-donki',
  templateUrl: './donki.page.html',
  styleUrls: ['./donki.page.scss'],
})
export class DonkiPage implements OnInit {
  donkiData: any[] = [];

  constructor(private donkiService: DonkiService) { }

  ngOnInit() {
    // Start date: 30 days ago
    const startDate = this.getFormattedDate(new Date(new Date().setDate(new Date().getDate() - 30)));
  
    // End date: current date
    const endDate = this.getFormattedDate(new Date());

    this.donkiService.getDonkiData(startDate, endDate).subscribe(
      (data) => {
        console.log(data); 
        this.donkiData = data;
      },
      (error) => {
        console.error('Erro ao carregar dados do DONKI: ', error);
      }
    );
  }

  getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
