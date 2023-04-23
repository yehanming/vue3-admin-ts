<template>
  
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="mobile" label="mobile" width="180" />
      <el-table-column prop="nickname" label="nickname" />
      <el-table-column prop="email" label="email" />
      <el-table-column prop="status" label="status">
        <template #default="scope">
          <div style="display: flex; align-items: center">
              <!-- <el-image :preview-src-list="srcList"/> -->
              {{ scope.row.status ? "激活" : "禁用" }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    
    <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :small="true"
        :disabled="disabled"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { userListReq } from '@/api/user'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const disabled = ref(false)
const tableData = ref([])

onMounted(() => {
  selectList()
})

const handleSizeChange = (val: number) => {
  pageSize.value = val
  selectList()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  selectList()
}

const selectList = () => {
  const param = {
    page: currentPage.value,
    size: pageSize.value
  }
  userListReq(param).then(res => {
    tableData.value = res
    total.value = 3
  })
}

</script>

<style scoped>
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>