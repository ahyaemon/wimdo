<template>
    <label id="nav-icon">
        <span></span>
    </label>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    export default class WNavIcon extends Vue {
    }

</script>

<style lang="scss" scoped>
    #nav-icon {
        %icon-base {
            position: absolute;
            height: 3px;
            width: 25px;
            border-radius: 3px;
            background: #555;
            display: block;
            content: '';
            cursor: pointer;
        }

        span {
            @extend %icon-base;

            &::before {
                @extend %icon-base;
                bottom: -8px;
            }

            &::after {
                @extend %icon-base;
                bottom: -16px;
            }
        }
    }
</style>