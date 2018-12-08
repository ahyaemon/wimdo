import { MutationTree } from 'vuex';
import { WimdoState } from '../types';
import { titleMutations } from './title';
import { pageMutations } from './page';
import { sentenceMutations } from './sentence';
import { importErrorPages } from '../template';

export const mutations: MutationTree<WimdoState> = {
    ...titleMutations,
    ...pageMutations,
    ...sentenceMutations,

    setParam(state, param: any) {
        if (param.title) {
            state.title = param.title;
        } else {
            state.title = '読込失敗しちゃった';
        }

        if (param.pages) {
            state.pages = param.pages;
            state.nowPage = state.pages[0];
        } else {
            state.pages = importErrorPages;
            state.nowPage = state.pages[0];
        }
    },

};
