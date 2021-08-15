import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { PasswordActions } from './actions/password.action';
import { Password } from './models/password';

export class AppStateModel {
  public passwords!: Password[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    passwords: [],
  },
})
@Injectable()
export class AppState {
  @Selector()
  static passwords(state: AppStateModel) {
    return state.passwords;
  }

  @Action(PasswordActions.AddPassword)
  add(
    { getState, patchState }: StateContext<AppStateModel>,
    { password }: PasswordActions.AddPassword
  ) {
    const state = getState();
    patchState({
      passwords: [...state.passwords, password],
    });
  }

  @Action(PasswordActions.RemovePassword)
  remove(
    { getState, patchState }: StateContext<AppStateModel>,
    { id }: PasswordActions.RemovePassword
  ) {
    patchState({
      passwords: getState().passwords.filter((password) => password.id != id),
    });
  }

  @Action(PasswordActions.CopyPassword)
  copy(
    { getState, patchState }: StateContext<AppStateModel>,
    { id }: PasswordActions.CopyPassword
  ) {
    const passwords = getState().passwords;
    passwords.forEach((password) => {
      if (password.id === id) {
        password.coppied = true;
      }
    });
    patchState({ passwords });
  }
}
