import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: String = '';
  email: String = '';
  secret: String = '';
  defaultValue = "pet"
  answer: String = '';
  genders = ['male', 'female'];

  //another way to handle forms
  @ViewChild('form') signupForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }, 
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log('submitted by Kyle', form)
  //   this.username = form.value.username;
  //   this.email = form.value.email;
  //   this.secret = form.value.secret;
  // }

  onSubmit() {
    //have to add userData b/c I ngModel those values together in the html
    this.username = this.signupForm.value.userData.username;
    this.email = this.signupForm.value.userData.email;
    this.secret = this.signupForm.value.secret;

    this.signupForm.reset();
  }
}
