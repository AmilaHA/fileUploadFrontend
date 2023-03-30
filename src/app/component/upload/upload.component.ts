import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FileUploadService} from "../../service/file-upload.service";
import {UploadClass} from "../../model/upload-class.model";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit{

  file?: File;
  moduleList: any = ['Module One', 'Module Two'];
  majorList: any = ['Major One', 'Major Two'];
  mainList: any = ['Main One', 'Main Two'];
  constructor(private fileUploadService: FileUploadService) {}
  ngOnInit(): void {
  }

  form = new FormGroup({
    file: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    module: new FormControl('', Validators.required),
    major: new FormControl('', Validators.required),
    main: new FormControl('', Validators.required),
    text1: new FormControl(null),
    text2: new FormControl(null),
    text3: new FormControl(null),
    text4: new FormControl(null),
  });

  get myForm(){
    return this.form.controls;
  }

  changeModule({e}: { e: any }) {
    this.form.patchValue({
      module: e.target.value
    });
  }

  changeMajor({e}: { e: any }) {
    this.form.patchValue({
      major: e.target.value
    });
  }

  changeMain({e}: { e: any }) {
    this.form.patchValue({
      main: e.target.value
    });
  }

  selectFile(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit(form: FormGroup) {
    let newUploadClass: UploadClass = new UploadClass(
      form.value.module,
      form.value.major,
      form.value.main,
      form.value.email,
      form.value.text1,
      form.value.text2,
      form.value.text3,
      form.value.text4
  );
    if (this.file) {
      this.fileUploadService.saveFile(this.file, newUploadClass).subscribe(data => {
        this.form.reset();
        alert("File Saved Successfully");
      }, (error) => {
        alert("File Saving error");
      })
    }
  }
}
