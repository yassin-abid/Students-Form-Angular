import { Component, signal } from '@angular/core';
import { Etudiant } from './etudiant';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [EtudiantFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP3-Forms');
}
