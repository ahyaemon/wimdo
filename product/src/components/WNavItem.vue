<template>
    <div @mouseover="over" @mouseout="out" :class="{hovered: hovered}">
        <span v-text="page.title" @click="showPageClicked"/>
        <div>
            <button class="square-button" type="button" v-if="hovered" @click="upPageClicked">↑</button>
            <button class="square-button" type="button" v-if="hovered" @click="downPageClicked">↓</button>
            <button class="square-button" type="button" v-if="hovered" @click="addPageAfterClicked">＋</button>
            <button class="square-button" type="button" v-if="hovered" @click="deletePageClicked" style="margin-left: 40px;">×</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { Page } from '@/store/types';
    import { Action, Getter, Mutation } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component
    export default class WNavItem extends Vue {

        @Mutation('setNowPage', { namespace }) private setNowPage!: (pageId: number) => void;
        @Mutation('upPage', { namespace }) private upPage!: (pageId: number) => void;
        @Mutation('downPage', { namespace }) private downPage!: (pageId: number) => void;
        @Mutation('addPageAfter', { namespace }) private addPageAfter!: (pageId: number) => void;
        @Mutation('deletePage', { namespace }) private deletePage!: (pageId: number) => void;
        @Prop() private page!: Page;
        private hovered: boolean = false;

        private over() {
            this.hovered = true;
        }

        private out() {
            this.hovered = false;
        }

        private showPageClicked(): void {
            this.setNowPage(this.page.id);
        }

        private upPageClicked(): void {
            this.upPage(this.page.id);
        }

        private downPageClicked(): void {
            this.downPage(this.page.id);
        }

        private addPageAfterClicked(): void {
            this.addPageAfter(this.page.id);
        }

        private deletePageClicked(): void {
            this.deletePage(this.page.id);
        }

    }
</script>

<style lang="scss">
</style>