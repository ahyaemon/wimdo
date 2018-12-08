<template>
    <nav>
        <div id="nav-title">
            <WTitle />
        </div>
        <ul>
            <li v-for="(page, ipage) in pages" :key="ipage" :class="{b: isNowPage(page)}">
                <WNavItem :page="page" @click.native="itemClicked"/>
            </li>
        </ul>
        <button class="normal-button" @click="output">出力</button>
        <label class="normal-button" for="input-file">
            <span>読込</span>
            <input type="file" id="input-file" style="display:none;" v-on:change="fileSelected">
        </label>
    </nav>
</template>

<script lang="ts">
    import { Component, Vue, Emit } from 'vue-property-decorator';
    import WTitle from '@/components/WTitle.vue';
    import WNavItem from '@/components/WNavItem.vue';
    import { Page } from '@/store/types';
    import template from '@/template';
    import { Action, Getter, Mutation } from 'vuex-class';
    const namespace: string = 'wimdo';
    import { download, read } from '../utils';

    @Component({
        components: {
            WTitle,
            WNavItem,
        },
    })
    export default class Nav extends Vue {

        @Getter('pages', { namespace }) private pages!: string;
        @Getter('nowPage', { namespace }) private nowPage!: Page;
        @Getter('param', { namespace }) private param!: any;
        @Mutation('setParam', { namespace }) private setParam!: (param: any) => void;

        @Emit('itemClicked')
        private itemClicked() {}

        private isNowPage(page: Page): boolean {
            return page.id === this.nowPage.id;
        }

        private output(): void {
            const outputTemplate = template
                    .replace('___title___', this.param.title)
                    .replace('___param___', JSON.stringify(this.param));
            download(outputTemplate, 'index.html');
        }

        private fileSelected(e: any) {
            const file: File = e.target.files[0];
            read(file).then((res) => {
                const paramString: string = res.split('\n')
                        .filter((line: string) => (line.match('const param')))[0]
                        .replace(/\s+const param = /, '');
                const param = JSON.parse(paramString.substr(0, paramString.length - 1));
                this.setParam(param);
            }).catch((res) => {
                window.alert('読み込み失敗');
            });
        }

    }
</script>

<style lang="scss">
    nav {
        position: relative;
        min-height: 100vh;
        border-right: 1px solid grey;
        background-color: white;

        #nav-title {
            padding: 10px;
        }
    }
</style>