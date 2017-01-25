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
  }
}
