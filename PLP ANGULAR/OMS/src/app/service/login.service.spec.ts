import { TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});

