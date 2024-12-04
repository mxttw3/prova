import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.page.html',
  styleUrls: ['./new-users.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class NewUsersPage implements OnInit {

  newUser: User = {
    nombre: '',
    apellidos: '',
    email: '',
    dni: ''
  };

  users: User[] = [];

  constructor() {}

  ngOnInit() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      console.log('Usuarios recuperados desde Local Storage:', this.users);
    } else {
      console.log('No hay usuarios almacenados en Local Storage.');
    }
  }

  addUser() {
    if (this.newUser.nombre && this.newUser.apellidos && this.newUser.email && this.newUser.dni) {
      this.users.push(this.newUser);
      localStorage.setItem('users', JSON.stringify(this.users));

      this.newUser = { nombre: '', apellidos: '', email: '', dni: '' };
      
      console.log('Nuevo usuario agregado:', this.newUser);
    } else {
      console.log('Por favor, complete todos los campos');
    }
  }
}
