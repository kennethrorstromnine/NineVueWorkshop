<template>
  <div>
    <b-card title="Opret Todo">
      <div class="form-group">
          <label for="todo">Todo</label>
          <input id="todo" v-model="todo" type="text" class="form-control" placeholder="Indtast todo" />
          <p>{{todo}}</p>

          <button @click="opret">Opret</button>
      </div>
    </b-card>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { todoService } from "@/services/todo.service";

@Component
export default class RedigerTodo extends Vue {
  private todo: string = "";

  @Watch("$route.params.id") onRouteChange(){
    this.todo = todoService.hent(+this.$route.params.id);
  }

  private opret(): void {
    todoService.opret(this.todo);
    console.log("Todo", todoService.hentListen());
    // this.$emit("opret", this.todo);
    this.$store.dispatch('FETCH_TODOS');
    this.todo = "";
  }
}
</script>
