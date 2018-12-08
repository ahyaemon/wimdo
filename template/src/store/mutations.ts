import { MutationTree } from 'vuex';
import { WimdoState } from './types';

export const mutations: MutationTree<WimdoState> = {
    setNowPage(state, id: number) {
        state.nowPage = state.pages.filter((page) => page.id === id)[0];
    },

    load(state, param: any) {
        console.log(param);
        state.title = param.title;
        state.pages = param.pages;
        state.nowPage = param.pages[0];
    }
};
