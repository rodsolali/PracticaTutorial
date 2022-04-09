import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public myForm:FormGroup;
  public student:Estudiante;

  constructor(private studentService:EstudianteService, private fb:FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group( {
      name: [""],
      controlnumber: [""],
      curp: [""],
      age: [0],
      active: [false]
    });
  }

  create() {
    this.student = { 
      name: this.myForm.controls.name.value,
      controlnumber: this.myForm.controls.controlnumber.value,
      age: this.myForm.controls.age.value,
      curp: this.myForm.controls.curp.value,
      active: this.myForm.controls.active.value,
    }
    this.studentService.createStudent(this.student);
  }
}
