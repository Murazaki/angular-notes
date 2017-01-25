import { Component } from '@angular/core';

import { Eleve } from './eleve.model';

@Component({
  selector: 'iim-web-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
  listeEleves: Array<Eleve>;

  constructor() {
    this.listeEleves = new Array();
    let notesVictor = {};
//    notesVictor = {
//      'Français': 12,
//      'Maths': 8,
//      'Geo': 16
//    };
    notesVictor[Eleve.matieres[0]] = 12; // notesVictor['Français']
    notesVictor[Eleve.matieres[1]] = 8; // notesVictor['Maths']
    notesVictor[Eleve.matieres[2]] = 16; // notesVictor['Geo']

    let victor = new Eleve('Victor', notesVictor);

    let notesHugo = {};
    notesHugo[Eleve.matieres[0]] = 10; // notesHugo['Français']
    notesHugo[Eleve.matieres[1]] = 13; // notesHugo['Maths']
    notesHugo[Eleve.matieres[2]] = 15; // notesHugo['Geo']

    let hugo = new Eleve('Hugo', notesHugo);

    // this.listeEleves = [victor, hugo];
    this.listeEleves.push(victor);
    this.listeEleves.push(hugo);
  }
  
  get moyenneGlobale() {
    let somme = 0;

    for(let eleve of this.listeEleves) {
      let moyenneeleve = parseInt(eleve.moyenne);

      somme += moyenneeleve;
    }

    return somme/this.listeEleves.length;
  }
  
  get matieres() {
    return Eleve.matieres;
  }

}
