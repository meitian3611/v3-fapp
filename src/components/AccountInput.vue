<script setup lang="ts">
import { reactive, ref } from 'vue'
import request from '@/service/api/commonApi/index'

const props = withDefaults(
  defineProps<{
    accValue: Array<string> | string
  }>(),
  {
    accValue: '',
  }
)
type options = {
  label: string
  value: string
}
let accLoading = ref(false)
let optionsAcc = reactive<Array<options>>([])

const emits = defineEmits<{
  (e: 'update:accValue', data: unknown): void
}>()

const selectChange = (val: unknown) => {
  emits('update:accValue', val)
}
const remoteAcc = (str: string) => {
  if (str !== '') {
    accLoading.value = true
    request
      .getSelectAccount({ accountName: str.trim() })
      .then((res) => {
        if (res?.code === 200) {
          optionsAcc = res.data.map((item: any) => {
            return {
              value: item.code,
              label: item.fullName,
            }
          })
        }
      })
      .finally(() => (accLoading.value = false))
  }
}
</script>

<template>
  <el-select
    multiple
    popper-class="remoteSelect"
    :model-value="accValue"
    @change="selectChange"
    filterable
    remote
    reserve-keyword
    placeholder="请输入"
    :remote-method="remoteAcc"
    :loading="accLoading"
  >
    <el-option v-for="item in optionsAcc" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>
</template>

<style scoped lang="scss"></style>
