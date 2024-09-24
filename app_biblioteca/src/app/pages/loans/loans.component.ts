import { Component } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent {
  selectedStatus: string = 'all';
  loans = [
    {
      title: 'The Hobbit',
      status: 'borrowed',
      borrowedDate: '01/08/2024',
      returnDate: '15/08/2024',
      image: 'assets/hobbit.png'
    },
    {
      title: 'Game of Thrones',
      status: 'returned',
      borrowedDate: '05/07/2024',
      returnDate: '20/07/2024',
      image: 'assets/got.png'
    }
  ];

  filteredLoans = this.loans;

  filterLoans() {
    if (this.selectedStatus === 'all') {
      this.filteredLoans = this.loans;
    } else {
      this.filteredLoans = this.loans.filter(loan => loan.status === this.selectedStatus);
    }
  }

  clearFilters() {
    this.selectedStatus = 'all';
    this.filteredLoans = this.loans;
  }
}

