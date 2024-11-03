<template>
  <div class="blog-detail">
    <h1 v-if="selectedArticle">{{ selectedArticle.title }}</h1>
    <img v-if="selectedArticle" :src="selectedArticle.image" alt="Blog Image" />
    <p v-if="selectedArticle">{{ selectedArticle.description }}</p>
    <div class="author-info" v-if="selectedArticle">
      <img :src="selectedArticle.author.image" alt="Author Image" class="author-image" />
      <p>By {{ selectedArticle.author.name }} - {{ selectedArticle.author.role }}</p>
    </div>
    <p v-else>Loading article...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['selectedArticle']),
  },
  mounted() {
    console.log('Selected Article:', this.selectedArticle);
    console.log('Type of Selected Article:', typeof this.selectedArticle);
    // Optional: check for properties
    if (this.selectedArticle) {
        console.log('Title:', this.selectedArticle.title);
    }
}
};
</script>
