import { Password as PasswordModel } from 'app/models/password';

export namespace PasswordActions {
  export class AddPassword {
    static readonly type = '[PASSWORD] Add';

    constructor(public password: PasswordModel) {}
  }

  export class RemovePassword {
    static readonly type = '[PASSWORD] Remove';

    constructor(public id: number) {}
  }

  export class CopyPassword {
    static readonly type = '[PASSWORD] Copy';

    constructor(public id: number) {}
  }
}
