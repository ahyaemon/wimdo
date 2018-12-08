import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { RootState, WimdoState } from './types';
import { defaultPages } from './template';

export const state: WimdoState = {
    title: 'Wimdo',
    pages: [],
    nowPage: undefined
};

export const wimdo: Module<WimdoState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions: undefined,
    mutations,
};
