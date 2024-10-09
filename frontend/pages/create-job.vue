<script setup>
let category = ref("");
let title = ref("");
let description = ref("");
let position_salary = ref("");
let position_location = ref("");
let company_name = ref("");
let company_location = ref("");
let company_email = ref("");
let errors = ref([]);
</script>

<template>
  <div class="py-10 px-6">
    <h1 class="mb-6 text-2xl">Create job</h1>

    <form v-on:submit.prevent="submitForm" class="space-y-4">
      <div>
        <label>Category</label>

        <select
          v-model="category"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        >
          <option value="">Select category</option>
          <option>Category</option>
        </select>
      </div>

      <div>
        <label>Title</label>
        <input
          v-model="title"
          type="text"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          v-model="description"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        ></textarea>
      </div>

      <div>
        <label>Salary</label>
        <input
          type="text"
          v-model="position_salary"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        />
      </div>

      <div>
        <label>Location</label>
        <input
          type="text"
          v-model="position_location"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        />
      </div>

      <div>
        <label>Company name</label>
        <input
          type="text"
          v-model="company_name"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        />
      </div>

      <div>
        <label>Company location</label>
        <input
          type="text"
          v-model="company_location"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        />
      </div>

      <div>
        <label>Company e-mail</label>
        <input
          type="text"
          v-model="company_email"
          class="w-full mt-2 p-4 rounded-xl bg-gray-100"
        />
      </div>

      <button class="py-4 px-6 bg-teal-700 text-white rounded-xl">
        Submit
      </button>
    </form>
  </div>
</template>
