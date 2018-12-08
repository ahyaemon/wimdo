<template>
    <div id="title">
        <div class="label" @click="labelClicked" v-if="!isEditableMode">
            <p v-text="nowPageTitle"></p>
        </div>
        <div class="input" v-if="isEditableMode">
            <input type="text" :value="nowPageTitle"  @input="input" @keydown.enter="leave" v-on:blur="leave" v-focus/>
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
    export default class WPageTitle extends Vue {

        @Getter('nowPageTitle', { namespace }) private nowPageTitle!: string;
        @Mutation('setNowPageTitle', { namespace }) private setNowPageTitle!: (title: string) => void;
        @Mutation('setNowPageSuperTitle', { namespace }) private setNowPageSuperTitle!: () => void;

        private isEditableMode: boolean = false;

        private labelClicked() {
            this.isEditableMode = true;
        }

        private leave() {
            this.isEditableMode = false;
            if (this.nowPageTitle.length === 0) {
                this.setNowPageSuperTitle();
            }
        }

        private input(e: any) {
            const value = e.target.value.trim();
            this.setNowPageTitle(value);
        }

    }

</script>

<style lang="scss" scoped>
    #title {
        font-size: 200%;
    }
</style>
