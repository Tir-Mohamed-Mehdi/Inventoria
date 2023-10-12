import { Injectable } from '@angular/core';
import { AuthHelpFunctionsService } from '../helpService/auth-help-func.service';

@Injectable({
  providedIn: 'root',
})
export class TokenExpirationService {
  constructor(private HELP_FUNC: AuthHelpFunctionsService) {}

  localData = localStorage.getItem('data');
  objectData = !!this.localData ? JSON.parse(this.localData) : 0;

  JWT_DATE_DATA = this.HELP_FUNC.checkJwtDate(this.objectData);

  TODAY_DATE = new Date().getTime();

  tokenExpirationDate = () => this.TODAY_DATE > this.JWT_DATE_DATA;
}
