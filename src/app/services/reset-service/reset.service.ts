import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  private contactUrl = environment.apiUrl + 'api/app_user'

  constructor(private http: HttpClient) { }

  public ResetPassword = (data) => {
    return this.http.post(this.contactUrl + '/resetPassword', data, { observe: 'response' })
  }
}
