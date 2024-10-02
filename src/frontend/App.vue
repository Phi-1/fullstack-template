<script setup lang="ts">
import { ref, Ref } from 'vue'

const helloWorld: Ref<string | null> = ref(null)
fetch("http://localhost:8162/hello-world", { method: "GET" })
    .then(async (data) => helloWorld.value = await data.text())
    .catch((error) => console.error(error))

</script>

<template>
    <h1>{{ helloWorld ? helloWorld : "loading..." }}</h1>
</template>

<style scoped>
</style>
