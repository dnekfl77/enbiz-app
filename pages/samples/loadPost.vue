<script setup lang="ts">

const loadPost = () => {
  console.log('load')
  const { data, pending, error, refresh } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  console.log(data)
}
</script>

<template>
  <div class="max-w-xs space-y-4 mx-auto mt-4">
      <button @click.prevent="loadPost">Load post</button>
  </div>
</template>
