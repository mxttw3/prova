import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';  // Importar ActivatedRoute
import { User } from '../models/user.model';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class UserDetailsPage implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el índice del usuario desde los parámetros de la URL
    const index = this.route.snapshot.paramMap.get('index');
    
    if (index) {
      // Convertir el índice a un número
      const userIndex = +index;
      // Obtener el usuario de la lista en localStorage o de algún lugar
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        this.user = users[userIndex]; // Usar el índice para obtener el usuario
      }
    }
  }
}
