<script setup lang="ts">
import { ref } from 'vue'
import request from '@/service/api/commonApi/index'
import { userFormat } from '@/common/utils/inputFormat'
let props = defineProps({
  accValue: String,
})
let emits = defineEmits<{
  (e: 'update:accValue', data: string): void
}>()

let loading = ref(true)
let isShow = ref(false)

type options = {
  userId: string
  value: string
  label: string
}
let listAcc = ref<options[]>([])

const getRemoteList = (str: string) => {
  if (str.length) {
    loading.value = true
    listAcc.value = []
    str = userFormat(str)
    request
      .getUsersInfo({ userName: str })
      .then((res) => {
        if (res.data) {
          listAcc.value = res.data.map((item: any) => {
            return {
              userId: item.userId,
              value: `${item.userName}(${item.userCnName})`,
              label: `${item.userName}(${item.userCnName})`,
            }
          })
        }
      })
      .finally(() => (loading.value = false))
  }
}

const handleCheck = (list: options) => {
  emits('update:accValue', list.value)
}

const inputFocus = () => {
  if (props.accValue?.length) {
    isShow.value = true
    getRemoteList(props.accValue)
  }
}
const inputBlur = () => {
  isShow.value = false
}
const inputChange = (val: string) => {
  isShow.value = true
  emits('update:accValue', val)
  getRemoteList(val)
}
</script>

<template>
  <el-popover
    popper-class="accOwnerPopper"
    placement="bottom"
    width="200"
    transition="fade-in-linear"
    trigger="focus"
    v-model:visible="isShow"
  >
    <div class="containerPop" v-show="!loading">
      <div class="userList" v-for="(item, index) in listAcc" :key="index">
        <div class="list" @click="handleCheck(item)">
          {{ item.label }}
        </div>
      </div>
    </div>
    <div v-show="loading" class="isLoad">加载中</div>
    <div v-show="loading === false && listAcc.length === 0" class="isNull">无数据</div>
    <template #reference>
      <el-input
        placeholder="请输入"
        @focus="inputFocus"
        @blur="inputBlur"
        :maxlength="30"
        :model-value="accValue"
        @input="inputChange"
      >
      </el-input>
    </template>
  </el-popover>
</template>

<style lang="scss">
.accOwnerPopper {
  padding: 10px 5px;
  .list {
    padding: 5px;
    cursor: pointer;
  }
  .list:hover {
    background: #f5f7fa;
  }
  .isLoad,
  .isNull {
    color: #999;
    text-align: center;
    font-size: 14px;
  }
}
</style>
