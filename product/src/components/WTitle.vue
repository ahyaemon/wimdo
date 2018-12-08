<template>
    <div id="title">
        <div class="label" @click="labelClicked" v-if="!isEditableMode">
            <p v-text="title"></p>
        </div>
        <div class="input" v-if="isEditableMode">
            <input type="text" :value="title"  @input="input" @keydown.enter="leave" v-on:blur="leave" v-focus/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import focusDirective from '@/directives/focus';
    import { Action, Getter, Mutation } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component({
        directives: {
            focus: focusDirective,
        },
    })
    export default class WTitle extends Vue {

        @Getter('title', { namespace }) private title!: string;
        @Mutation('setTitle', { namespace }) private setTitle!: (title: string) => void;
        @Mutation('setSuperTitle', { namespace }) private setSuperTitle!: () => void;

        private isEditableMode: boolean = false;

        private labelClicked() {
            this.isEditableMode = true;
        }

        private leave() {
            this.isEditableMode = false;
            if (this.title.length === 0) {
                this.setSuperTitle();
            }
        }

        private input(e: any) {
            this.setTitle(e.target.value);
        }

    }

</script>

<style lang="scss" scoped>
    #title {
        font-size: 200%;
    }
</style>
