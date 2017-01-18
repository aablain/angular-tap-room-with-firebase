import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  kegs: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.kegs = af.database.list('/kegs');
  }
  // kegs: Keg[] = [
  //   new Keg("Ginger-Lemon", "Health-Ade", 5, 6),
  //   new Keg("Trilogy", "Enlightened", 4, 5),
  //   new Keg("Coffee", "Reed's", 16, 4),
  //   new Keg("Moroccan Mint", "Beyond Brewing Company", 7, 7),
  //   new Keg("Blood Orange", "bucha", 24, 5),
  //   new Keg("Asian Pear", "Kombucha Wonder Drink", 8, 6)
  // ];
  selectedKeg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  minusOne(thisKeg) {
    thisKeg.amountLeft = thisKeg.amountLeft - 1;
  }

  newKeg() {
  }
  const items = af.database.list('/kegs');
  kegs.push({ name: newName });

  // newKeg(name, brand, sugar, price) {
  //   console.log(name);
  //   console.log(brand);
  //   console.log(sugar);
  //   console.log(price);
  //   alert('hey!');
  //   this.kegs.push(new Keg(name, brand, sugar, price));
  // }
}

// export class Keg {
//   public amountLeft: number = 124;
//   constructor(public name: string, public brand: string, public sugar: number, public price: number) { }
// }
