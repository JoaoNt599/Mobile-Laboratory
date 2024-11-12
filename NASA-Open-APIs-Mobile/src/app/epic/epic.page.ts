import { Component, OnInit } from '@angular/core';
import { EpicService } from '../services/epic.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.page.html',
  styleUrls: ['./epic.page.scss'],
})
export class EpicPage implements OnInit {
  epicImages: any[] = [];
  errorMessage: string = '';

  constructor(private epicService: EpicService) {}

  ngOnInit() {
    this.loadEpicImages();
  }

  loadEpicImages() {
    this.epicService.getEpicImages().subscribe(
      (data) => {
        this.epicImages = data; // Salvar as imagens retornadas
      },
      (error) => {
        console.error('Erro ao carregar imagens da EPIC: ', error);
        this.errorMessage = 'Erro ao carregar imagens da EPIC.';
      }
    );
  }

  getEpicImageUrl(imageName: string, date: string): string {
    return this.epicService.getEpicImageUrl(imageName, date);
  }
}
