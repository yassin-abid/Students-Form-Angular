import { Component } from '@angular/core';
import { Etudiant } from '../etudiant';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-etudiant-form',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './etudiant-form.html',
styleUrls: ['./etudiant-form.css']
})


export class EtudiantFormComponent {
  classes = ['IGL3', 'DATA3','ICI3', 'BI','Forgeron'];
  model = new Etudiant(18, 'Mohamed', this.classes[0], 'Abid');
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

  newEtudiant() {
  this.model = new Etudiant(42, '', '');
}
}