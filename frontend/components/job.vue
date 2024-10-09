<script setup></script>

<template>
  <div class="p-6 flex items-center justify-between bg-gray-100 rounded-xl">
    <div>
      <h3 class="mb-2 text-xl font-semibold">Title</h3>
      <p class="text-gray-600">Company</p>
    </div>

    <div>
      <p class="mb-2">Location</p>
      <p>Salary</p>
    </div>

    <div>
      <p>Posted Created At</p>
    </div>

    <div class="space-x-4">
      <NuxtLink
        :to="'/browse/'"
        class="py-4 px-6 bg-teal-700 text-white rounded-xl"
        >Details</NuxtLink
      >
      <NuxtLink
        :to="'/edit-job/'"
        class="py-4 px-6 bg-cyan-700 text-white rounded-xl"
        >Edit</NuxtLink
      >
      <a
        @click="deleteJob(job.id)"
        class="py-4 px-6 bg-rose-700 text-white rounded-xl"
        >Delete</a
      >
    </div>
  </div>
</template>
