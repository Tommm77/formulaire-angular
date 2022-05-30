import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  formindex: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nom1: [''],
      prenom1: [''],
      nom2: [''],
      prenom2: [''],
      nom3: [''],
      prenom3: [''],
    });

    this.formindex = this.fb.group({
      index: [''],
    });
  }

  submitindex() {
    if (this.formindex.get('index').value == 1) {
      console.log(this.form.get('nom1').value, this.form.get('prenom1').value);
      const app = document.getElementById('app3');
      const a = document.createElement('p');
      const b = document.createElement('p');
      a.textContent = this.form.get('nom1').value;
      b.textContent = this.form.get('prenom1').value;
      app?.appendChild(a);
      app?.appendChild(b);
    }
    if (this.formindex.get('index').value == 2) {
      console.log(this.form.get('nom2').value, this.form.get('prenom2').value);
      const app = document.getElementById('app3');
      const a = document.createElement('p');
      const b = document.createElement('p');
      a.textContent = this.form.get('nom2').value;
      b.textContent = this.form.get('prenom2').value;
      app?.appendChild(a);
      app?.appendChild(b);
    }
    if (this.formindex.get('index').value == 3) {
      console.log(this.form.get('nom3').value, this.form.get('prenom3').value);
      const app = document.getElementById('app3');
      const a = document.createElement('p');
      const b = document.createElement('p');
      a.textContent = this.form.get('nom3').value;
      b.textContent = this.form.get('prenom3').value;
      app?.appendChild(a);
      app?.appendChild(b);
    }
  }

  submit() {
    console.log('Données du formulaire...', this.form.value);
  }

  submitnom() {
    console.log(
      this.form.get('nom1').value,
      this.form.get('nom2').value,
      this.form.get('nom3').value
    );
  }

  submitprenom() {
    console.log(
      this.form.get('prenom1').value,
      this.form.get('prenom2').value,
      this.form.get('prenom3').value
    );
  }

  afficher1() {
    console.log(this.form.get('nom1').value, this.form.get('prenom1').value);
  }

  afficher2() {
    console.log(this.form.get('nom2').value, this.form.get('prenom2').value);
  }

  afficher3() {
    console.log(this.form.get('nom3').value, this.form.get('prenom3').value);
  }

  afficherp1() {
    const app = document.getElementById('app3');
    const a = document.createElement('p');
    const b = document.createElement('p');
    a.textContent = this.form.get('nom1').value;
    b.textContent = this.form.get('prenom1').value;
    app?.appendChild(a);
    app?.appendChild(b);
  }
  afficherp2() {
    const app = document.getElementById('app4');
    const a = document.createElement('p');
    const b = document.createElement('p');
    a.textContent = this.form.get('nom2').value;
    b.textContent = this.form.get('prenom2').value;
    app?.appendChild(a);
    app?.appendChild(b);
  }
  afficherp3() {
    const app = document.getElementById('app5');
    const a = document.createElement('p');
    const b = document.createElement('p');
    a.textContent = this.form.get('nom3').value;
    b.textContent = this.form.get('prenom3').value;
    app?.appendChild(a);
    app?.appendChild(b);
  }

  submitprenomp() {
    const app = document.getElementById('app');
    const a = document.createElement('p');
    const b = document.createElement('p');
    const c = document.createElement('p');
    a.textContent = this.form.get('prenom1').value;
    b.textContent = this.form.get('prenom2').value;
    c.textContent = this.form.get('prenom3').value;
    app?.appendChild(a);
    app?.appendChild(b);
    app?.appendChild(c);
  }

  submitnomp() {
    const app = document.getElementById('app2');
    const a = document.createElement('p');
    const b = document.createElement('p');
    const c = document.createElement('p');
    a.textContent = this.form.get('nom1').value;
    b.textContent = this.form.get('nom2').value;
    c.textContent = this.form.get('nom3').value;
    app?.appendChild(a);
    app?.appendChild(b);
    app?.appendChild(c);
  }
}
