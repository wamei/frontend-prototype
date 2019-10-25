import { Module, ActionTree, MutationTree } from "vuex";
import { RootState } from "./index";

import AuthenticationRepository from "@/repositories/AuthenticationRepository";

export const MUTATION = {
  LOGIN: "login"
};

export const ACTION = {
  LOGIN: "login",
  AUTO_LOGIN: "autoLogin",
  LOGOUT: "logout"
};

export interface ContextState {
  isLogin: boolean;
  userId: number;
}

const state: ContextState = {
  isLogin: false,
  userId: 0
};

const actions: ActionTree<ContextState, RootState> = {
  async [ACTION.AUTO_LOGIN]({ state, commit, dispatch }) {
    if (state.isLogin) {
      return;
    }
    let auth = AuthenticationRepository.findBySession();
    AuthenticationRepository.save(auth);

    dispatch("user/init", auth.userId.toValue(), { root: true });

    commit(MUTATION.LOGIN, {
      isLogin: true,
      userId: auth.userId.toValue()
    });
  },
  async [ACTION.LOGIN]({ state, commit, dispatch }, { id, password }) {
    if (state.isLogin) {
      return;
    }
    let auth = AuthenticationRepository.findByEmailAndPassword(id, password);
    AuthenticationRepository.save(auth);

    dispatch("user/init", auth.userId.toValue(), { root: true });

    commit(MUTATION.LOGIN, {
      isLogin: true,
      userId: auth.userId.toValue()
    });
  },
  async [ACTION.LOGOUT]({ state, commit }) {
    if (!state.isLogin) {
      return;
    }
    let auth = AuthenticationRepository.findBySession();
    AuthenticationRepository.delete(auth.id);

    commit(MUTATION.LOGIN, {
      isLogin: false,
      userId: 0
    });
  }
};

const mutations: MutationTree<ContextState> = {
  [MUTATION.LOGIN]: (state, { isLogin, userId }) => {
    state.isLogin = isLogin;
    state.userId = userId;
  }
};

export const context: Module<ContextState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
};

export default context;
