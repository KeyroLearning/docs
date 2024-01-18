<script setup lang="ts">
import Error from '/error.vue'
const route = useRoute()

const capitalize = (str: String) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
const component = computed(() => {
    switch(true) {
      case route.path === '/':
        return 'Index'
      case route.path.split('/').length === 3:
        return 'Article'
      default: return route.path.split('/').map(capitalize).join('')
    }
})

</script>

<template>
    <main>
        <component :is="component" v-slot="attrs">
            <ContentDoc v-bind="attrs">
              <template #not-found>
                <Error :error="{ statusCode: 404 }"/>
              </template>
            </ContentDoc>
        </component>
    </main>
</template>