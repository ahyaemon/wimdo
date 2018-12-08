import { MutationTree } from 'vuex';
import { WimdoState, Sentence, Tag } from '../types';
import { newSentenceTemplate, emptyTextTemplate } from '../template';
import { swap } from '../../utils';

export const sentenceMutations: MutationTree<WimdoState> = {

    setSentence(state, param: { id: number, content: string }) {
        const target = state.nowPage.sentences.find((sentence) => sentence.id === param.id)!;
        target.content = param.content;
    },

    setSuperSentence(state, id: number) {
        const target = state.nowPage.sentences.find((sentence) => sentence.id === id)!;
        target.content = emptyTextTemplate;
    },

    addSentenceAfter(state, id: number) {
        const maxId = Math.max(...state.nowPage.sentences.map((sentence) => sentence.id));
        const newSentence = { ...newSentenceTemplate, id: maxId + 1 };
        const targetSentence = state.nowPage.sentences.find((sentence) => sentence.id === id)!;
        const idx = state.nowPage.sentences.indexOf(targetSentence);
        state.nowPage.sentences.splice(idx + 1, 0, newSentence);
    },

    upSentence(state, id: number) {
        const targetSentence = state.nowPage.sentences.find((sentence) => sentence.id === id)!;
        const idx = state.nowPage.sentences.indexOf(targetSentence);
        if (idx === 0) {
            return;
        }
        state.nowPage.sentences = swap(state.nowPage.sentences, idx, idx - 1);
    },

    downSentence(state, id: number) {
        const targetSentence = state.nowPage.sentences.find((sentence) => sentence.id === id)!;
        const idx = state.nowPage.sentences.indexOf(targetSentence);
        if (idx === state.nowPage.sentences.length - 1) {
            return;
        }
        state.nowPage.sentences = swap(state.nowPage.sentences, idx, idx + 1);
    },

    switchTag(state, id: number) {
        const targetSentence = state.nowPage.sentences.find((sentence) => sentence.id === id)!;
        if (targetSentence.tag === Tag.H) {
            targetSentence.tag = Tag.P;
        } else {
            targetSentence.tag = Tag.H;
        }
    },

    deleteSentence(state, id: number) {
        const newSentences = state.nowPage.sentences.filter((sentence) => sentence.id !== id);
        if (newSentences.length === 0) {
            newSentences.push({...newSentenceTemplate});
        }
        state.nowPage.sentences = newSentences;

    },

};
