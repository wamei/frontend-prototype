import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";

import { context, ContextState } from './context';
import { user, UserState } from './user';

Vue.use(Vuex);

export interface RootState {
  context: ContextState;
  user: UserState;
};

const store: StoreOptions<RootState> = {
  modules: {
    context,
    user,
  },
};

export default new Vuex.Store<RootState>(store);
