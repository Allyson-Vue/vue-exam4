<script>
import PetCard from '../components/PetCard.vue'

export default {
    components: { PetCard },
    props: [ 'pets' ]
}
</script>

<!--Put the html code into the template brackets.
V-for is essentially a "for-loop", and can turn an array into multiple
elements
:key is meant to uniquely identify each element with an id-->
<template>
    <div>
        <h2>Our Precious Pets:</h2>
            <div v-for="pet in pets" :key="pet.id">
                <PetCard :pet="pet" />
            </div>
    </div>
</template>