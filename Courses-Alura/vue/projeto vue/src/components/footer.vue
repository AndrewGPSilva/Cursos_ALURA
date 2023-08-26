<template>
    <div>
        <footer>
            <h4>Projeto com Vue 3... by Andrew</h4>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return{}
        }
    }
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: center;
        background-color: black;
        color: white;
        border-top: 0.1px solid rgb(167, 167, 167);
        padding: 10px;
    }

    footer h4 {
        text-decoration: underline;
        font-weight: bold;
        color: yellow;
        padding: 10px;
    }
</style>