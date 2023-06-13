<!--
 * @Author: undercurre undercurre@163.com
 * @Date: 2023-06-06 22:14:22
 * @LastEditors: undercurre undercurre@163.com
 * @LastEditTime: 2023-06-07 02:11:34
 * @FilePath: \uni-cms\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <view class="content">
      <image class="logo" src="@img/logo.png" />
      <view class="text-area">
        <text class="title">{{ title }}</text>
      </view>
      <view>{{ userStore.userInfo.name }}</view>
      <button @click="go2Hello">go2Hello</button>
      <view v-for="item in testList" :key="item.name">{{ item.name }}</view>
      <uni-badge text="1"></uni-badge>
    </view>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '@/stores/user'
  import UserService from '@/api/user/user'
import router, { getRouteParams } from '@/router';
import { getStorageRef } from '@/utils/storage';
  
  const title = ref('Test')
  
  const userStore = useUserStore()
  
  async function getData() {
    const res = await UserService.login({
      username: 'test',
      password: '827ccb0eea8a706c4c34a16891f84e7b',
    })
    console.log(res)
  }

  getData()

  const routerParams = getRouteParams('test');
  console.log('路由参数', routerParams.id)

  function go2Hello() {
    router.pop()
  }

  const testList = getStorageRef("test")
  console.log(testList.value)
  </script>
  
  <style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
  
  .text-area {
    display: flex;
    justify-content: center;
  }
  
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
  </style>
  