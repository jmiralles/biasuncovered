<template>
  <div>
    <h3>Data List</h3>
    <b-table
      selectable
      select-mode="single"
      @row-selected="rowSelected"
      hover
      :items="files"
      v-if="files.length > 0"
    ></b-table>
    <div id="message" v-else>Please, upload a file first</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  mounted() {
    this.$store.dispatch("GET_FILES");
  },
  computed: mapState(["files"]),
  methods: {
    rowSelected([item]) {
      this.$store.commit(
        "SET_NEW_ANALYSIS_FILE",
        (item && item.file_id) || null
      );
    }
  }
};
</script>

<style>
</style>


