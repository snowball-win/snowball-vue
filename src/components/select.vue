<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :title="title" :is-show.sync="listShow"></select-input>
        <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
      </div>
    </section>
</template>

<script>

import selectInput from '@/components/selectInput'
import list from '@/components/list'

let listData = [
  {
    title: 'javascript'
  },
  {
    title: 'html+css'
  },
  {
    title: 'jQuery'
  },
  {
    title: 'react'
  },
  {
    title: 'nodejs'
  }
]

export default {
  data(){
      return {
        listShow: false,
        listData: listData,
        title: ''
      }
  },
  methods: {
    titleHandle(title){
      console.log(title)
      this.title = title;
    }
  },
  components: {
    selectInput,
    list
  }
}
</script>
