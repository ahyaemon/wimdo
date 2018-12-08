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
    </nav>
</template>

<script lang="ts">
    import { Component, Vue, Emit } from 'vue-property-decorator';
    import WTitle from './WTitle.vue';
    import WNavItem from './WNavItem.vue';
    import { Page } from '../store/types';
    import { Getter } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component({
        components: {
            WTitle,
            WNavItem,
        },
    })
    export default class Nav extends Vue {

        @Getter('pages', { namespace }) private pages!: string;
        @Getter('nowPage', { namespace }) private nowPage!: Page;

        @Emit('itemClicked')
        private itemClicked() {}

        private isNowPage(page: Page): boolean {
            return page.id === this.nowPage.id;
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