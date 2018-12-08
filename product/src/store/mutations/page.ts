import { MutationTree } from 'vuex';
import { WimdoState, Page } from '../types';
import { newPageTemplate } from '../template';
import { swap } from '../../utils';

export const pageMutations: MutationTree<WimdoState> = {

    setNowPage(state, id: number) {
        state.nowPage = state.pages.find((page) => page.id === id)!;
    },

    deletePage(state, id: number) {
        const newPages = state.pages.filter((page) => page.id !== id);
        if (newPages.length === 0) {
            newPages.push({ ...newPageTemplate });
        }
        state.pages = newPages;
        state.nowPage = state.pages[0];
    },

    addPageAfter(state, id: number) {
        const maxId = Math.max(...state.pages.map((page) => page.id ));
        const newPage = { ...newPageTemplate, id: maxId + 1 };
        const targetPage = state.pages.find((page) => page.id === id)!;
        const idx = state.pages.indexOf(targetPage);
        state.pages.splice(idx + 1, 0, newPage);
    },

    upPage(state, id: number) {
        const targetPage = state.pages.find((page) => page.id === id)!;
        const idx = state.pages.indexOf(targetPage);
        if (idx === 0) {
            return;
        }
        state.pages = swap(state.pages, idx, idx - 1);
    },

    downPage(state, id: number) {
        const targetPage = state.pages.find((page) => page.id === id)!;
        const idx = state.pages.indexOf(targetPage);
        if (idx === state.pages.length - 1) {
            return;
        }
        state.pages = swap(state.pages, idx, idx + 1);
    },

};
