import { Page, Sentence, Tag } from './types';

export const defaultPages: Page[] = [
    {
        id: 1,
        title: '使い方',
        sentences: [
            { id: 1, content: 'サイトのタイトル変更', tag: Tag.H },
            { id: 2, content: '左上のWimdoをクリックして編集。', tag: Tag.P },
            { id: 3, content: 'メニューの編集', tag: Tag.H },
            { id: 4, content: '左メニューの各アイテムにカーソルを合わせると以下のボタンが表示される。', tag: Tag.P },
            { id: 5, content: '↑：アイテムを上に', tag: Tag.P },
            { id: 6, content: '↓：アイテムを下に', tag: Tag.P },
            { id: 7, content: '→：インド人を右に', tag: Tag.P },
            { id: 8, content: '＋：新規アイテムを下に追加', tag: Tag.P },
            { id: 9, content: '×：アイテムを削除', tag: Tag.P },
            { id: 10, content: 'ページの編集', tag: Tag.H },
            { id: 11, content: 'メニューの編集と同じ感じ。', tag: Tag.P },
            { id: 12, content: '「t」ボタンで、見出しと文を切り替える。', tag: Tag.P },
            { id: 13, content: 'ページタイトルもクリックで変更可。', tag: Tag.P },
            { id: 14, content: 'サイト出力', tag: Tag.H },
            { id: 15, content: '「出力」ボタンで、作成したサイトをダウンロードする。', tag: Tag.P },
            { id: 16, content: 'サイト読込', tag: Tag.H },
            { id: 17, content: '一度ダウンロードしたサイトを「読込」ボタンで読み込み、編集することができる。', tag: Tag.P },
        ],
    },
    {
        id: 2,
        title: '製作者',
        sentences: [
            { id: 1, content: '名前', tag: Tag.H },
            { id: 2, content: 'あひゃえもん', tag: Tag.P },
            { id: 3, content: 'Github', tag: Tag.H },
            { id: 4, content: 'https://github.com/ahyaemon', tag: Tag.P },
        ],
    },
];

export const importErrorPages: Page[] = [
    {
        id: 1,
        title: '読込失敗しちゃった',
        sentences: [
            {
                id: 1,
                content: '概要',
                tag: Tag.H,
            },
            {
                id: 2,
                content: '何かが発生して読み込みに失敗しました。',
                tag: Tag.P,
            },
            {
                id: 3,
                content: '正常な操作でこのエラーが発生した場合は、ご報告をば。。。',
                tag: Tag.P,
            },
        ],
    },
];

export const newPageTemplate: Page = {
    id: 1,
    title: '無題',
    sentences: [{
        id: 1,
        content: 'なんもない',
        tag: Tag.P,
    }],
};

export const newSentenceTemplate: Sentence = {
    id: 1,
    content: 'クリックして編集',
    tag: Tag.P,
};

export const emptyTextTemplate: string = '(´・ω・)';
