type ErrorType = 'NoUserFound' | 'SessionExpired' | 'RejectedRouting' | 'Other';

export class GenericSeshatError implements Error {
  private readonly type: ErrorType;
  message: string;
  name: string;
  stack: string;

  constructor(message?: string, type?: ErrorType, name?: string, stack?: string) {
    this.type = type;
  }

  public getType(): ErrorType {
    return this.type;
  }

}
