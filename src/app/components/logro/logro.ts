import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RawgService } from '../../services/rawg.service';

@Component({
  selector: 'app-logro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './logro.html',
  styleUrl: './logro.css',
})
export class Logro implements OnInit {

  juegosRpg: any[] = [];

  constructor(private rawg: RawgService) {}

  ngOnInit() {
    this.rawg.getGamesByGenre('role-playing-games-rpg').subscribe({
      next: (data) => {
        this.juegosRpg = data.results.slice(0, 5); // Solo top 5
      },
      error: (err) => {
        console.error('Error cargando RPG:', err);
      }
    });
  }
}
