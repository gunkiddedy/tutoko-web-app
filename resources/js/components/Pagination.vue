<template>
  <ul class="flex justify-between items-center leading-tight font-bold text-gray-700">
    <div v-if="pagination.current_page > 1" class="rounded-full bg-gray-300 text-yellow-100">
      <a href="#" @click.prevent="change(pagination.current_page - 1)">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </div>

    <!-- only show when total data > paginate(per page)-->
    <li v-for="page in pages" :key="page" class="px-4">
      <a v-if="pagination.total > pagination.per_page" :class="[page == pagination.current_page ? 'text-yellow-500 underline' : '']" href="#" @click.stop="change(page)">
        {{ page }}
      </a>
    </li>

    <div v-if="pagination.current_page < pagination.last_page" class="rounded-full bg-yellow-500 text-yellow-100">
      <a href="#" @click.prevent="change(pagination.current_page + 1)">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  </ul>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    offset: {
      type: Number,
      default: 4,
    },
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return null;
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      let pages = [];
      for (let page = from; page <= to; page++) {
        pages.push(page);
      }
      return pages;
    },
  },
  methods: {
    change: function (page) {
      this.pagination.current_page = page;
      this.$emit("paginate");
    },
  },
};
</script>
