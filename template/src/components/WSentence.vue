<template>
    <div class="sentence">
        <div class="label">
            <h3 v-if="sentence.tag=='H'" v-text="sentence.content"/>
            <p v-if="sentence.tag=='P'" v-text="sentence.content"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import { Sentence } from '../store/types';

    @Component
    export default class WSentence extends Vue {
        @Prop() private sentence!: Sentence;
    }

</script>

<style lang="scss" scoped>
    .delete-button {
        margin-left: 40px;
    }

    .sentence {
        padding: 2px;
    }

</style>
