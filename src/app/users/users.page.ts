import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})

export class UsersPage implements OnInit {
  users: User[] = [];
  usersPerPage: number = 4;
  currentPage: number = 1;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      console.log('Usuarios cargados desde localStorage:', this.users);
    } else {
      this.fetchUsersFromJson();
    }

    //! Si no hay usuarios, cargarlos desde el archivo JSON
    if (this.users.length === 0) {
      this.fetchUsersFromJson();
    }
  }

  fetchUsersFromJson() {
    fetch('./assets/users.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return res.json();
      })
      .then(json => {
        console.log('Datos cargados desde el archivo JSON:', json);
        this.users = json.map((userData: any) => new User(
          userData.name,
          userData.surname,
          userData.email,
          userData.id
        ));
        this.saveUsersToLocalStorage();
      })
      .catch(error => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  }

  saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.saveUsersToLocalStorage();
    this.loadUsers();
  }

  get paginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.usersPerPage;
    const endIndex = startIndex + this.usersPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage * this.usersPerPage < this.users.length) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  viewUserDetails(index: number) {
    const absoluteIndex = (this.currentPage - 1) * this.usersPerPage + index;
    this.router.navigate(['/user-details', absoluteIndex]);
  }

  downloadPDF() {
    const doc = new jsPDF();

    const header = ['Name', 'Email', 'ID'];
    const data = this.users.map(user => [user.nombre + ' ' + user.apellidos, user.email, user.dni]);

    autoTable(doc, {
      head: [header],
      body: data,
    });

    // Guardar el PDF con el nombre "Usuarios"
    doc.save('Usuarios.pdf');
  }
  
}
