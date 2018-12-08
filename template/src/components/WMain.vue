<template>
    <main>
        <div class="page-title">
            <WPageTitle/>
        </div>

        <div class="page-sentence" v-for="(sentence, isentence) in nowPage.sentences" :key="isentence">
            <WSentence :sentence="sentence"/>
        </div>
    </main>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import WPageTitle from './WPageTitle.vue';
    import WSentence from './WSentence.vue';
    import { Page } from '../store/types';
    import { Getter } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component({
        components: {
            WPageTitle,
            WSentence,
        },
    })
    export default class WMain extends Vue {
        @Getter('nowPage', { namespace }) private nowPage!: Page;
    }
</script>

<style lang="scss">
    main {
        padding: 10px;

        .page-title {
            margin: 10px 10px 20px 10px;
        }

        .page-sentence h3 {
            margin: 10px 0 0 0;
        }
    }
</style>