<template>
    <div class="sentence" @mouseover="over" @mouseout="out" :class="{hovered: hovered}">
        <div class="label" @click="labelClicked" v-if="!isEditableMode">
            <h3 v-if="sentence.tag=='H'" v-text="sentence.content"/>
            <p v-if="sentence.tag=='P'" v-text="sentence.content"/>
        </div>
        <div class="input" v-if="isEditableMode">
            <input type="text" :value="sentence.content"  @input="input" @keydown.enter="leave" v-on:blur="leave" v-focus/>
        </div>
        <div>
            <button class="square-button" type="button" v-if="hovered" @click="upSentenceClicked">↑</button>
            <button class="square-button" type="button" v-if="hovered" @click="downSentenceClicked">↓</button>
            <button class="square-button" type="button" v-if="hovered" @click="addSentenceAfterClicked">＋</button>
            <button class="square-button" type="button" v-if="hovered" @click="switchTagClicked">t</button>
            <button class="square-button" type="button" v-if="hovered" @click="deleteSentenceClicked" style="margin-left: 40px;">×</button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import focusDirective from '@/directives/focus';
    import { Sentence } from '@/store/types';
    import { Action, Getter, Mutation } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component({
        directives: {
            focus: focusDirective,
        },
    })
    export default class WSentence extends Vue {

        @Prop() private sentence!: Sentence;
        @Mutation('setSentence', { namespace }) private setSentence!: (param: { id: number, content: string }) => void;
        @Mutation('setSuperSentence', { namespace }) private setSuperSentence!: (id: number) => void;
        @Mutation('upSentence', { namespace }) private upSentence!: (id: number) => void;
        @Mutation('downSentence', { namespace }) private downSentence!: (id: number) => void;
        @Mutation('switchTag', { namespace }) private switchTag!: (id: number) => void;
        @Mutation('deleteSentence', { namespace }) private deleteSentence!: (id: number) => void;
        @Mutation('addSentenceAfter', { namespace }) private addSentenceAfter!: (id: number) => void;

        private isEditableMode: boolean = false;
        private hovered: boolean = false;

        private over() {
            this.hovered = true;
        }

        private out() {
            this.hovered = false;
        }

        private labelClicked() {
            this.isEditableMode = true;
        }

        private leave() {
            this.isEditableMode = false;
            if (this.sentence.content.length === 0) {
                this.setSuperSentence(this.sentence.id);
            }
        }

        private input(e: any) {
            let value: string = e.target.value;
            // 半角スペースだけだったら空文字に置き換え
            // 全角は許容
            if (value.replace(/ /g, '').length === 0) {
                value = '';
            }
            this.setSentence({id: this.sentence.id, content: value});
        }

        private upSentenceClicked() {
            this.upSentence(this.sentence.id);
        }

        private downSentenceClicked() {
            this.downSentence(this.sentence.id);
        }

        private switchTagClicked() {
            this.switchTag(this.sentence.id);
        }

        private deleteSentenceClicked() {
            this.deleteSentence(this.sentence.id);
        }

        private addSentenceAfterClicked() {
            this.addSentenceAfter(this.sentence.id);
        }

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
