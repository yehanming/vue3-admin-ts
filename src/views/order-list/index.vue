<template>
  
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="订单号" width="180" />
      <el-table-column prop="realName" label="真实姓名" width="180" />
      <el-table-column prop="gender" label="性别" width="180" />
      <el-table-column prop="channelType" label="渠道类型" width="180" >
        <template #default="scope">
          {{ scope.row.channelType === 0 ? '微信' : '支付宝' }}
        </template>
      </el-table-column>
      <el-table-column prop="channelOrderNo" label="渠道订单号" width="180" />
      <el-table-column prop="totalPrice" label="总金额" width="180" />
      <el-table-column prop="payPrice" label="支付金额" width="180" />

      <el-table-column prop="status" label="状态">
        <template #default="scope">
          <div style="display: flex; align-items: center">
              {{ status2Text(scope.row.status) }}
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
import { apiOrderList } from '@/api/order'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)
const disabled = ref(false)
const tableData = ref([])
const statusTexts = ['已创建', '已支付', '已取消', '退款中', '已退款', '不处理']

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
  apiOrderList(param).then(res => {
    tableData.value = res.data
    total.value = res.totalElements
  })
}

const status2Text = (status: number) => {
  if (!status ) {
    return "状态丢失";
  }
  return statusTexts[status]
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