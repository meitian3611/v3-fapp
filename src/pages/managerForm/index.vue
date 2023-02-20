<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import request from '@/service/api/manageForm/index'
import SubjectQuery from '@/components/SubjectQuery.vue'
onMounted(() => {})

let query = reactive({
  subjectValue: '',
  addSubject: 'ALL',
  subjectOwner: '',
  circumstanceOwner: '',
  accountCheckReviewer: '',
})
let newCount = ref(0)

//
let queryRef = ref()
const handleSearch = () => {}
</script>

<template>
  <div class="manageForm accountCommon">
    <div class="formQuery">
      <subject-query
        v-model:query="query"
        :newCount="newCount"
        @handleSearch="handleSearch"
        ref="queryRef"
      ></subject-query>
    </div>
  </div>
</template>

<style lang="scss" src="../../assets/common.scss"></style>
<style lang="scss">
.manageForm {
  .formQuery {
    padding: 10px;
    background: #fff;
    &_name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 5px;
      border-bottom: 1px solid #f1f1f1;
    }
    &_body {
      display: flex;
      align-items: flex-end;
      // justify-content: space-between;
      margin-top: 10px;
      .queryInput {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
        .listCon {
          margin-right: 20px;
          margin-top: 5px;
          .label {
            margin-bottom: 5px;
            font-size: 12px;
            color: #666;
            .tags {
              padding: 2px 4px;
              color: #fff;
              border-radius: 40%;
              background: #f56c6c;
            }
          }
        }
      }
      .queryBtn {
        display: flex;
        margin-top: 5px;
      }
    }
  }
}
</style>
