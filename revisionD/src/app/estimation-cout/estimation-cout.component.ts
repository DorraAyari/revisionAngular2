import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnoncesService } from '../annonces.service';
import { Annonce } from '../model/Annonce';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent {
  userForm: FormGroup; // Déclarez la propriété userForm de type FormGroup
  Annonce: Annonce[] = [];
  cost: number | null = null;

  constructor(private formBuilder: FormBuilder, private productService: AnnoncesService) {
    // Initialisez le formulaire avec les champs requis et des validateurs
    this.userForm = this.formBuilder.group({
      position: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.maxLength(10)]],


    });
  }
  onSubmit() {

    // Vérifiez que userForm n'est pas nul
    if (this.userForm?.valid) {
      // Récupérez les valeurs du formulaire
      const formData = this.userForm.value;

      if (formData.position === "haut") {
        if (formData.description < 30) {
          this.cost = 10;
        } else {
          this.cost = 0;
        }
      } else if (formData.position === "bas") {
        if (formData.description < 30) {
          this.cost = 20;
        } else {
          this.cost = 20;
        }
      }

      // Utilisez le service pour ajouter l'utilisateur
      this.productService.add(formData).subscribe(
        (response) => {
          console.log('product ajouté avec succès');
          alert("produit ajouter aave succees");
          // Réinitialisez le formulaire après l'ajout
          this.userForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de product', error);
        }
      );
    }
  }
}
