<template>
  <div>
    <nav class="p-6 flex items-center justify-between bg-teal-800">
      <NuxtLink to="/" class="text-xl text-white">Feature Jobs</NuxtLink>

      <div class="flex items-center space-x-4">
        <NuxtLink to="/" class="text-white hover:text-teal-300">Home</NuxtLink>
        <NuxtLink to="/browse" class="text-white hover:text-teal-300"
          >Browse</NuxtLink
        >
      </div>
    </nav>

    <slot />

    <footer class="p-6 flex flex-wrap items-center justify-between bg-gray-900">
      <p class="text-gray-300">
        Copyright (c) {{ new Date().getFullYear() }} - Feature Jobs
      </p>

      <div class="flex mt-6 md:mt-0 items-center space-x-4">
        <div class="flex gap-2">
          <NuxtLink
            to="/myjobs"
            class="py-4 px-6 bg-teal-900 hover:bg-teal-700 text-white rounded-xl"
            >My jobs</NuxtLink
          >
          <NuxtLink
            to="/createjob"
            class="py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-xl"
            >Create job</NuxtLink
          >
          <a
            class="py-4 px-6 bg-rose-600 hover:bg-rose-700 text-white rounded-xl"
            >Log out</a
          >
        </div>

        <div class="flex gap-2">
          <NuxtLink
            to="/login"
            class="py-4 px-6 bg-teal-900 hover:bg-teal-700 text-white rounded-xl"
            >Log in</NuxtLink
          >
          <NuxtLink
            to="/signup"
            class="py-4 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-xl"
            >Sign up</NuxtLink
          >
        </div>
      </div>
    </footer>
  </div>
</template>
