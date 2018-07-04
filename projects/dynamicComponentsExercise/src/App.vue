<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="currentComponent='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="currentComponent='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="currentComponent='appRed'">Load Red Template</button>
                <hr>
                <component :is="currentComponent">
                    <h1>Text</h1>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data() {
            return {
                currentComponent: 'appBlue'
            };
        }
    }
</script>

<style>
</style>
