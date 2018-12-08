import { GetterTree } from 'vuex';
import { RootState, WimdoState, Page } from './types';

export const getters: GetterTree<WimdoState, RootState> = {

    pages(state): Page[] {
        return state.pages;
    },

    title(state): string {
        return state.title;
    },

    nowPageTitle(state): string {
        return state.nowPage.title;
    },

    hasPage(state): boolean {
        return state.pages.length > 0;
    },

    nowPage(state): Page {
        return state.nowPage;
    },

    param(state): any {
        return {
            title: state.title,
            pages: state.pages,
        };
    },

};
