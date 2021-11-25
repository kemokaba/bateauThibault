import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(private router: Router) { }
  home(){
    this.router.navigate(['/home'])
  }
  
  ngOnInit() {
    console.log('OK')
  }


}
