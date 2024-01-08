import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  @Input() nbArticles!: number;
  @Input() listeArticles!: any[];

  // Propriété pour stocker le nombre réel d'articles à afficher
  articlesToDisplay: number = 0;

  ngOnChanges() {
    // Mettez à jour le nombre réel d'articles à afficher lorsqu'il y a des changements
    this.articlesToDisplay = this.nbArticles > this.listeArticles.length ? this.listeArticles.length : this.nbArticles;
  }
}
