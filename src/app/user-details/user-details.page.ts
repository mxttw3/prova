import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    const index = this.route.snapshot.paramMap.get('index');
    
    if (index) {
      const userIndex = +index;
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        this.user = users[userIndex];
      }
    }
  }
}
