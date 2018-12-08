import { Page, Sentence, Tag } from './types';

export const defaultPages: Page[] = [
    {
        id: 1,
        title: '使い方',
        sentences: [
            {
                id: 1,
                content: '概要',
                tag: Tag.H,
            },
            {
                id: 2,
                content: 'ここはサンプルページ',
                tag: Tag.P,
            },
        ],
    },
    {
        id: 2,
        title: 'このページについて',
        sentences: [
            {
                id: 1,
                content: '製作者',
                tag: Tag.H,
            },
            {
                id: 2,
                content: 'あひゃえもん',
                tag: Tag.P,
            },
            {
                id: 3,
                content: 'Github',
                tag: Tag.H,
            },
            {
                id: 4,
                content: 'Here!!',
                tag: Tag.P,
            },
        ],
    },
];
