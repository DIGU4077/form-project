import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  userForm: FormGroup;
  users: { name: string; email: string; phonenumber: string; class: string; }[] = [];
  currentLanguage = 'en';

  constructor(private fb: FormBuilder, private translate: TranslateService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required]],
      class: ['', [Validators.required]]
    });

    // Initialize translate service
    this.translate.setDefaultLang(this.currentLanguage);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      alert("succefully user add")
      this.userForm.reset();
    }
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
  }
}