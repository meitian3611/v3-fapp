<script setup lang="ts">
type props = {
  queryShow: boolean
}
// defineProps<props>()
withDefaults(defineProps<props>(), {
  // TS写法 => withDefault用于添加默认值
  queryShow: false,
})

const emits = defineEmits<{
  (e: 'update:queryShow', data: boolean): void // TS写法
}>()

const buttonClick = (val: boolean) => {
  emits('update:queryShow', val)
}
</script>

<template>
  <div class="querySwitch">
    <el-button
      @click="buttonClick(true)"
      :class="queryShow ? 'activeBtn' : 'defaultBtn'"
      size="small"
    >
      展开</el-button
    >
    <el-button
      @click="buttonClick(false)"
      style="margin-left: 0"
      :class="!queryShow ? 'activeBtn' : 'defaultBtn'"
      size="small"
      >收起</el-button
    >
  </div>
</template>

<style scoped lang="scss">
.querySwitch {
  .defaultBtn {
    color: #888888;
    font-size: 12px;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #dcdfe6;
    padding: 6px 12px;
  }
  .activeBtn {
    color: #fff;
    font-size: 12px;
    background: #409eff;
    padding: 6px 12px;
    border-radius: 2px;
    border: 1px solid #409eff;
  }
}
</style>
