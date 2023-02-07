<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import request from '@/service/api/manageForm/index'
import querySwitch from '@/components/querySwitch.vue'

onMounted(() => {
  // request.menuListTest().then((res) => {
  //   console.log(res)
  // })
})

let queryShow = ref(true) // true:展开/false:收起
</script>

<template>
  <div class="manageClass">
    <div class="queryBody">
      <div class="queryHeader">
        <div class="titleName">
          <span class="borderLine"></span>
          <span class="text">查询条件</span>
        </div>
        <div class="showBtn">
          <querySwitch v-model:queryShow="queryShow"></querySwitch>
        </div>
      </div>
      <div class="querySearch"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.manageClass {
  padding: 15px;
  .queryHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #f1f1f1;
    .titleName {
      font-weight: 700;
      position: relative;
      .borderLine {
        position: absolute;
        left: 0;
        top: 2px;
        display: inline-block;
        width: 3px;
        height: 15px;
        background-color: #3b84fb;
      }
      .text {
        padding-left: 10px;
      }
    }
  }
}
</style>
