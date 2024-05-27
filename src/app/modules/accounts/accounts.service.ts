import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api-service/api-service.service';
import { BACKEND_PORTS_LIST } from '../../core/backend-ports/ports.enum';
import { APP_HOSTNAME } from '../../core/common.enum';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  baseUrl = 'http://localhost:4000'; // Or dynamically set this value
  authority = APP_HOSTNAME + BACKEND_PORTS_LIST.ACCOUNTS;
  constructor(private apiService: ApiService) {}

  login(payload: any) {
    return this.apiService.postService(
      this.baseUrl,
      `api/account/login`,
      payload
    );
  }
}
