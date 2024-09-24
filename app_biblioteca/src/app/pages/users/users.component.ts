import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // Lista original de usuarios
  users = [
    { name: 'John Doe', email: 'johndoe@example.com', memberSince: 2021, userType: 'member', avatar: 'assets/user-avatar.png' },
    { name: 'Jane Smith', email: 'janesmith@example.com', memberSince: 2020, userType: 'admin', avatar: 'assets/user-avatar.png' }
    // Puedes agregar más usuarios aquí
  ];

  // Filtro seleccionado
  selectedUserType = 'all';

  // Lista filtrada de usuarios
  filteredUsers = this.users;

  // Método para filtrar los usuarios
  filterUsers() {
    if (this.selectedUserType === 'all') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => user.userType === this.selectedUserType);
    }
  }

  // Método para limpiar los filtros
  clearFilters() {
    this.selectedUserType = 'all';
    this.filteredUsers = this.users;
  }

  // Método para agregar un nuevo usuario
  addUser() {
    alert('Add New User clicked!');
    // Lógica para agregar un nuevo usuario
  }

  // Método para editar un usuario
  editUser(user: any) {
    alert(`Edit user: ${user.name}`);
    // Lógica para editar al usuario
  }

  // Método para eliminar un usuario
  deleteUser(user: any) {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      this.users = this.users.filter(u => u !== user);
      this.filteredUsers = this.filteredUsers.filter(u => u !== user);
    }
  }
}
