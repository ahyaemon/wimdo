<template>
    <div>
        <span v-text="page.title" @click="showPageClicked"/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { Page } from '../store/types';
    import { Getter, Mutation } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component
    export default class WNavItem extends Vue {

        @Mutation('setNowPage', { namespace }) private setNowPage!: (pageId: number) => void;
        @Prop() private page!: Page;

        private showPageClicked(): void {
            this.setNowPage(this.page.id);
        }

    }
</script>
