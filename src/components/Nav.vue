<script>
export default {
    data() {
        return {
            searchName: ''
        }
    },
    methods: {
        search() {
            this.$emit('search-pet', this.searchName);
        }
    }

}
</script>

<template>
    <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/pets">Meet our Pets!</router-link>

        <div>
            <input v-model="searchName" type="text" placeholder="Enter pet name" />
            <button @click="search">Search</button>
        </div>
    </nav>
</template>