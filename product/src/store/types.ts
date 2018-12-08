export interface RootState {
    version: string;
}

export interface Sentence {
    id: number;
    content: string;
    tag: Tag;
}

export interface Page {
    id: number;
    title: string;
    sentences: Sentence[];
}

export interface WimdoState {
    title: string;
    pages: Page[];
    nowPage: Page;
}

export enum Tag {
    H = 'H',
    P = 'P',
}
