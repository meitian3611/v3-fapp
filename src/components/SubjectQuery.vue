<script setup lang="ts">
import QuerySwitch from '@/components/QuerySwitch.vue'
import AccountInput from '@/components/AccountInput.vue'
import { ref, reactive, onMounted, toRefs } from 'vue'
import { IQueryInfo } from '@/types/index'

const props = defineProps<{
  query: IQueryInfo
  newCount: Number
}>()

const emits = defineEmits<{
  (e: 'handleSearch'): void
  (e: 'update:query', data: IQueryInfo): void
}>()

// true:展开/false:收起
let queryShow = ref(true)
const switchChange = () => (queryShow.value = !queryShow.value)

// 是否维护
const subjectOption = reactive([
  {
    value: 'ALL',
    label: '全部',
  },
  {
    value: 'NEW',
    label: '待维护',
  },
  {
    value: 'CHECKED',
    label: '已维护',
  },
])

// 重置
const handleReset = () => {
  const data = {
    subjectValue: '',
    addSubject: 'ALL',
    subjectOwner: '',
    circumstanceOwner: '',
    accountCheckReviewer: '',
  }
  emits('update:query', data)
}
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
        <div class="listCon">
          <div class="label">
            是否维护 <span class="tags">{{ newCount }}</span>
          </div>
          <div class="query">
            <el-select v-model="query.addSubject" placeholder="请选择">
              <el-option
                v-for="item in subjectOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
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
