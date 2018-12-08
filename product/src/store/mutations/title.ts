import { MutationTree } from 'vuex';
import { WimdoState, Tag } from '../types';
import { emptyTextTemplate } from '../template';

export const titleMutations: MutationTree<WimdoState> = {

    setTitle(state, title: string) {
        state.title = title;
    },

    setSuperTitle(state) {
        state.title = emptyTextTemplate;
    },

    setNowPageTitle(state, title: string) {
        state.nowPage.title = title;
    },

    setNowPageSuperTitle(state) {
        state.nowPage.title = emptyTextTemplate;
    },

};
