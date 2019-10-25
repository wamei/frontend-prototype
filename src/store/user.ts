import { Module, ActionTree, MutationTree } from "vuex";
import { RootState } from "./index";

import User from '@/domain/entity/User';
import UserId from '@/domain/entity/UserId';
import UserRepository from '@/repositories/UserRepository';

export const ACTION = {
  INIT: 'init',
  CHANGE_NAME: 'changeName',
};

export const MUTATION = {
  INIT: 'init',
};

export interface UserState {
  my: User;
};

const state: UserState = {
  my: User.createNullUser(),
};

const actions: ActionTree<UserState, RootState> = {
  [ACTION.INIT]({ commit}, userId: number) {
    let user = UserRepository.findById(new UserId(userId));

    commit(MUTATION.INIT, user);
  },
  [ACTION.CHANGE_NAME]({ state, commit}, name: string) {
    let user = UserRepository.findById(state.my.id);
    user.setName(name);
    UserRepository.save(user);

    commit(MUTATION.INIT, user);
  },
};

const mutations: MutationTree<UserState> = {
  [MUTATION.INIT](state, user: User) {
    state.my = user;
  },
};

export const user: Module<UserState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default user;
