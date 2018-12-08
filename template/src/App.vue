<template>
    <div id="app" v-if="hasPage">

        <div v-if="isMobile" id="nav-mobile">
            <WNavIcon class="nav-icon" @click.native="switchDisplayMenu"/>
            <transition name="mask">
                <WNavMask class="nav-mask" v-if="displayed" @click.native="switchDisplayMenu"/>
            </transition>
            <transition name="slide">
                <WNav class="nav" v-if="displayed" @itemClicked="switchDisplayMenu"/>
            </transition>
        </div>

        <div v-if="!isMobile" id="nav-pc">
            <WNav/>
        </div>

        <div id="main">
            <WMain/>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import WNav from './components/WNav.vue';
    import WNavIcon from './components/WNavIcon.vue';
    import WNavMask from './components/WNavMask.vue';
    import WMain from './components/WMain.vue';
    import { Action, Getter, Mutation } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component({
        components: {
            WNav,
            WNavIcon,
            WNavMask,
            WMain,
        },
    })
    export default class App extends Vue {

        @Getter('hasPage', { namespace }) private hasPage!: boolean;
        private width: number = 0;
        private displayed: boolean = false; /** mobile用 */

        private setWindowWidth() {
            this.width = window.innerWidth;
        }

        private created() {
            window.addEventListener('resize', this.setWindowWidth, false);
            this.setWindowWidth();
        }

        private switchDisplayMenu(): void {
            this.displayed = !this.displayed;
        }

        get isMobile(): boolean {
            return this.width <= 768;
        }

}

</script>

<style lang="scss">
    @import "../../product/src/scss/base.scss";
    $mobile-width: 768px !default;

    /** PC */
    @media screen and (min-width: $mobile-width + 1) {
        #app {
            display: flex;
            #nav-pc {
                flex: 0 1 300px;
            }

            #main {
                flex: 1 1 100px;
            }
        }
    }
    /** mobile */
    @media screen and (max-width: $mobile-width) {
        #app {
            .nav-mask {
                z-index: 10;
            }
            .nav {
                position: absolute;
                z-index: 20;
                width: 80%;
            }
        }

        .slide-enter-active, .slide-leave-active {
            transition: all .3s;
        }
        .slide-enter, .slide-leave-to {
            transform: translateX(-500px);
        }

        .mask-enter-active, .mask-leave-active {
            transition: opacity .3s;
        }
        .mask-enter, .mask-leave-to {
            opacity: 0;
        }
    }
</style>
