import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authorService:AuthorService){}

}
