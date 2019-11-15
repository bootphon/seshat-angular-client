import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeshatEventsService {
  public campaignsChange: EventEmitter<void> = new EventEmitter();
  public logInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}