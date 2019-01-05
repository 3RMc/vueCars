<template>
    <div id="app">
        <b-navbar toggleable="md" type="dark" variant="info">
            <div class="container">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="/">VueCars</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav class="ml-auto">

                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Искать авто"/>
                            <b-button size="sm" class="my-2 my-sm-0" type="submit">Поиск</b-button>
                        </b-nav-form>
                    </b-navbar-nav>

                </b-collapse>
            </div>

        </b-navbar>
        <div class="mt-4">
            <router-view/>
        </div>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .navbar {
        padding: 30px;

        a {
            font-weight: bold;
            color: lightgray;

            &.router-link-exact-active {
                color: white;
            }
        }
    }
</style>
<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class App extends Vue {
    }
</script>
