<template>
  <div>
    <h1>Todo</h1>

    <div class="row">

      <div class="col-4">
        Liste af todos
      </div>
      <div class="col-8">
        <rediger-todo />
      </div>

    </div>



  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RedigerTodo from "@/components/RedigerTodo.vue";

@Component({
  components: {
    RedigerTodo
  }
})
export default class Todo extends Vue {}
</script>

