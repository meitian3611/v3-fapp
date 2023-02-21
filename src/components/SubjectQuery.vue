<script setup lang="ts">
import QuerySwitch from '@/components/QuerySwitch.vue'
import AccountInput from '@/components/AccountInput.vue'
import { ref, reactive, onMounted } from 'vue'

type IList = {
  subjectValue: Array<string> | string
  addSubject: string
  subjectOwner: string
  circumstanceOwner: string
  accountCheckReviewer: string
}

const props = defineProps<{
  query: IList
  newCount: Number
}>()
const emits = defineEmits<{
  (e: 'handleSearch'): void
}>()

// true:展开/false:收起
let queryShow = ref(true)
const switchChange = () => (queryShow.value = !queryShow.value)

// 重置
const handleReset = () => {}
</script>

<template>
  <div class="formQuery_name textName">
    <div>
      <span class="bd_left" style="top: 5px"></span>
      <span class="text">查询条件</span>
    </div>
    <div class="queryControl">
      <QuerySwitch v-model:queryShow="queryShow" @change="switchChange"></QuerySwitch>
    </div>
  </div>
  <transition name="el-fade-in-linear">
    <div class="formQuery_body" v-show="queryShow">
      <div class="queryInput">
        <div class="listCon">
          <div class="label">科目</div>
          <div class="query">
            <AccountInput v-model:accValue="query.subjectValue"></AccountInput>
          </div>
        </div>
      </div>
      <div class="queryBtn">
        <el-button @click="emits('handleSearch')" type="primary">查询</el-button>
        <el-button @click="handleReset">重置</el-button>
      </div>
    </div>
  </transition>
</template>
