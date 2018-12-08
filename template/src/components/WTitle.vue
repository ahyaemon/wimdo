<template>
    <div id="title">
        <div class="label">
            <p v-text="title"></p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Getter } from 'vuex-class';
    const namespace: string = 'wimdo';

    @Component
    export default class WTitle extends Vue {
        @Getter('title', { namespace }) private title!: string;
    }

</script>

<style lang="scss" scoped>
    #title {
        font-size: 200%;
    }
</style>
