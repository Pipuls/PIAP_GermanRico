import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
bannerBackground:String = "https://lh3.googleusercontent.com/pw/AM-JKLXU3dmObIlwwAwOJ1qztTZa3bSQERDDxatq0kRkjLc5kmxZHocUVgXYuGM1auBfC4nyqNZcBm7On-2W7jD5tsuZ5mqL0slKXZim7O1Ap6R36lpQ4j7cPLlR2Ua0t8O2iR5QVF9jCZ3WiX85zKcWk5ESfg=w1788-h723-no?authuser=0"

  constructor() { }

  ngOnInit(): void {
  }

}
