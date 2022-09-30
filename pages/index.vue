<template>
  <div class="grid grid-cols-12 gap-8">
    <div class="col-span-4 truncate">
      <pre>{{JSON.stringify(questions, null, 1)}}</pre>
    </div>
    <div class="col-span-8">
      <div class="mx-auto block w-full max-w-screen-sm">
        <ul>
          <li v-for="item in questions">
            <div class="p-4 bg-gray-100 hover:shadow-lg cursor-pointer rounded my-2 select-none">
              <input class="w-full px-1.5 py-2 rounded-md border border-gray-300" v-model="item.text" type="text" placeholder="Type your question here">
              <select v-model="item.type">
                <option value="text">
                  Text
                </option>
                <option value="mcq">
                  Multiple Choices
                </option>
              </select>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuestions } from "@/store/questions";

const { questions } = useQuestions()
</script>
