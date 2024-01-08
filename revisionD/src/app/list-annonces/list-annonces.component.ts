import { Component } from '@angular/core';
import { AnnoncesService } from '../annonces.service';
import { Router } from '@angular/router';
import { Annonce } from '../model/Annonce';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent {
  annonces: Annonce[] = [];
  constructor(private annoncesService: AnnoncesService, private router: Router) {
    // Récupérer les produits à afficher
    this.getAnnonces();
  }

  getAnnonces() {

    // Utilisez votre ProductService pour récupérer les produits
    this.annoncesService.getAllProduct().subscribe(
      (annoces) => {
        this.annonces = annoces;
      },
      (error) => {
        console.error('Erreur lors de la récupération des produits', error);
      }
    );
  }
}
