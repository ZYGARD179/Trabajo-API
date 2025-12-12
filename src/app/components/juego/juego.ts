import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RawgService } from '../../services/rawg.service';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './juego.html',
  styleUrls: ['./juego.css']
})
export class Juego implements OnInit {

  juegosAccion: any[] = [];

  constructor(private rawg: RawgService) {}

  ngOnInit() {
    this.rawg.getGamesByGenre('action').subscribe({
      next: (data) => {
        this.juegosAccion = data.results.slice(0, 5);  // TOP 5
      },
      error: (err) => {
        console.error('Error al cargar juegos de acción:', err);
      }
    });
  }
}

