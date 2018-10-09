<template>
  <div>
    <h1>Todo</h1>

    <div class="row">

      <div class="col-4">
        <liste-todo />
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
import ListeTodo from "@/components/ListeTodo.vue";
import { todoService } from "@/services/todo.service";

@Component({
  components: {
    RedigerTodo,
    ListeTodo
  }
})
export default class Todo extends Vue {
}
</script>

