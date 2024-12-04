import { Component, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { Router } from '@angular/router';


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
      console.log('Usuarios cargados:', this.users);
    } else {
      console.log('No hay usuarios disponibles en Local Storage.');
    }
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
    // Poder ver el index correcto segun la paginación
    const absoluteIndex = (this.currentPage - 1) * this.usersPerPage + index;
    this.router.navigate(['/user-details', absoluteIndex]);
  }
  
}
