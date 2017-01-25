export class Eleve {
  static matieres = ['Français', 'Maths', 'Geo'];

  nom;
  notes;
  moyenne;

  constructor(nom, notes) {
//    this.notes = {
//      'Français': 12,
//      'Maths': 12,
//      'Geo': 12
//    };
    this.notes = notes;
    this.nom = nom;
    
    this.calculMoyenne();
  }

  calculMoyenne() {
    let somme = 0;

    for(let matiere in this.notes) {
      let note = parseInt(this.notes[matiere]);

      somme += note;
    }

    this.moyenne = somme/Object.keys(this.notes).length;
  }
}
