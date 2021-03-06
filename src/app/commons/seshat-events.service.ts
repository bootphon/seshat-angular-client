import {EventEmitter, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SeshatEventsService {
  public campaignsChange: EventEmitter<void> = new EventEmitter();
  public campaignsDisplayChange: EventEmitter<void> = new EventEmitter<void>();
  public logInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  public taskDeletedEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
