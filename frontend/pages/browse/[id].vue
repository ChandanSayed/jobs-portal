<script setup></script>

<template>
  <div class="py-10 px-6 grid md:grid-cols-4 gap-3">
    <div class="md:col-span-3">
      <h1 class="mb-6 text-3xl">Title</h1>

      <p>Description</p>

      <a
        v-bind:href="'mailto:test@test.com'"
        class="inline-block mt-6 py-4 px-6 bg-teal-700 text-white rounded-xl"
        >Apply</a
      >
    </div>

    <div class="md:col-span-1 p-6 bg-teal-700 text-white rounded-xl">
      <h3 class="mb-6 text-2xl">Company</h3>

      <p class="mb-2">Company</p>
      <p>Location Company</p>

      <hr class="my-6 opacity-30" />

      <h3 class="mb-6 text-2xl">Position</h3>

      <p class="mb-2">Position Location</p>
      <p>Salary</p>

      <hr class="my-6 opacity-30" />

      <p>Posted at Created At</p>
    </div>
  </div>
</template>
