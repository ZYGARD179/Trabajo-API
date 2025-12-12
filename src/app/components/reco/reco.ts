import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RawgService } from '../../services/rawg.service';

@Component({
  selector: 'app-reco',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reco.html',
  styleUrl: './reco.css',
})
export class Reco implements OnInit {

  juegosIndie: any[] = [];

  constructor(private rawg: RawgService) {}

  ngOnInit() {
    this.rawg.getGamesByGenre('indie').subscribe({
      next: (data) => {
        this.juegosIndie = data.results.slice(0, 5); // solo top 5
      },
      error: (err) => {
        console.error('Error cargando Indie:', err);
      }
    });
  }
}
