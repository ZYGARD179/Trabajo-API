import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RawgService } from '../../services/rawg.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  generoSeleccionado: string = "";
  resultados: any[] = [];

  constructor(private rawg: RawgService) {}

  buscarGenero() {
    if (!this.generoSeleccionado) return;

    this.rawg.getGamesByGenre(this.generoSeleccionado).subscribe({
      next: (data) => {
        this.resultados = data.results.slice(0, 6); // máximo 6 juegos
      },
      error: (err) => {
        console.error("Error buscando juegos:", err);
      }
    });
  }
}
