<template>
  <div>
    <h1>Todo</h1>

    <div class="row">

      <div class="col-4">
        <liste-todo :liste="liste" />
      </div>
      <div class="col-8">
        <rediger-todo @opret="opdaterListe" />
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
  private liste: string[] = [];
  mounted() {
    this.opdaterListe();
  }

  private opdaterListe(event?: Event) {
    this.liste = todoService.hentListen();
  }
}
</script>

