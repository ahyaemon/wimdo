import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations/index';
import { RootState, WimdoState, Page, Tag } from './types';
import { defaultPages } from './template';

export const state: WimdoState = {
    title: 'Wimdo',
    pages: defaultPages,
    nowPage: defaultPages[0],
};

export const wimdo: Module<WimdoState, RootState> = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
