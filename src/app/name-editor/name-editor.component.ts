import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  // name = new FormControl('');

  profileForm = this.fb.group({
    firstName: ['',
      Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }


  // updateName(){
  //   this.name.setValue("bob");
  // }

  onSubmit() {
    console.warn(this.profileForm.value)
  }


  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Bob',
      address: {
        street: 'random'
      }
    });
  }

}
