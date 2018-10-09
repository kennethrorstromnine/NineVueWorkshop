<template>
  <div>

    <b-list-group>
      <b-list-group-item v-for="(todo, index) of $store.getters.allTodos" :key="index">        
        <router-link :to="'/todo/'+index">{{todo}}</router-link>
      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { todoService } from "@/services/todo.service";

@Component
export default class ListeTodo extends Vue {
}
</script>
