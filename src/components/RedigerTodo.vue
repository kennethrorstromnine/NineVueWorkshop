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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class RedigerTodo extends Vue {
  private todo: string = "";

  private opret(): void {

    console.log("Todo", this.todo);

  }
}
</script>
