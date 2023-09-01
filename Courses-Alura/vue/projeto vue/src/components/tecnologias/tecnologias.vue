<template>
    <div class="container-tech">
        <div>
            <h2>Skills do Front-End</h2>
            <ul>
                <li v-for="(technology, index) in frontend" :key="index">
                    Linguagem: {{ technology }}
                </li>
            </ul>
        </div>
        <div>
            <h2>Skills do Back-End</h2>
            <ul>
                <li v-for="(technology, index) in backend" :key="index">
                    Linguagem: {{ technology.language }} / Framework: {{ technology.framework }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tecnologias",
        data() {
            return {
                frontend: [
                    "Vue 3",
                    "React",
                    "Angular"
                ],
                backend: [
                    {
                        language: "PHP", framework: "Laravel"
                    },
                    {
                        language: "Java", framework: "Spring Boot"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .container-tech {
        margin: 15px;
        padding: 10px;
        background-color: rgb(37, 37, 37);
        color: white;
    }

    li {
        list-style: none;
    }
</style>