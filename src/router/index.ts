import type * as types from './types'
import pages from './pages'
import type { DeepReadonly } from 'vue'

type PageNames = keyof typeof pages

type ObjectType<T> = 
      T extends 'courseDetails' ? types.CourseDetails : 
      T extends 'test' ? types.Test :
      never

const routeStore = {} as Record<PageNames, unknown>

export function getRouteParams<T extends PageNames>(
  page: T,
): DeepReadonly<ObjectType<T>> {
  const p = routeStore[page] as ObjectType<T>
  return readonly(p) as DeepReadonly<ObjectType<T>>
}

let navigateLock = false
function push<T extends PageNames>(
  page: T,
  params?: ObjectType<T>,
): Promise<any> | undefined {
  if (navigateLock) return
  const eventName = Math.floor(Math.random() * 1000) + new Date().getTime() // 生成唯一事件名
  navigateLock = true
  routeStore[page] = params
  uni.navigateTo({
    url: `${pages[page]}?eventName=${eventName}`,
    complete(res) {
      console.log('路由完成', res)
      navigateLock = false
    },
  })

  return new Promise<any>(
    (resolve, reject) => (
      uni.$once(eventName.toString(), resolve), uni.$once(eventName.toString(), reject)
    ),
  )
}

interface BackParams {
  /** 返回页面层级 */
  delta?: number
  /** 返回携带的数据 */
  data?: any
}

function pop({ delta, data }: BackParams = { delta: 1, data: null }) {
    uni.navigateBack({
        delta,
    })
}

const router = {
  push,
  pop,
}

export default router
