import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {UploadClass} from "../model/upload-class.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public authURL = environment.baseURL + '/upload';
  constructor(private http: HttpClient,
              private router: Router) { }

  saveFile(file: File, uploadClass: UploadClass) {
    const formData: FormData = new FormData();
    formData.append('file', file),
    formData.append('info', JSON.stringify(uploadClass))
    return this.http.post(this.authURL, formData);
  }
}
