import { ref, watch } from 'vue'
import type { Ref } from 'vue'
interface Test {
  name: string
}

type StorageKeys = 'test'

type ObjectType<T> = T extends 'test'
  ? Test[]
  : never

export function setStorage<T extends StorageKeys>(
  key: T,
  data: ObjectType<T>,
): void {
  uni.setStorageSync(key, data)
}

export function getStorage<T extends StorageKeys>(
  key: T,
  initValue: any = '',
): ObjectType<T> {
  const data = uni.getStorageSync(key) || initValue
  return data as ObjectType<T>
}

export function getStorageRef<T extends StorageKeys>(
  key: T,
  initValue: any = '',
): Ref<ObjectType<T>> {
  const data = uni.getStorageSync(key) || initValue
  const result = ref(data)
  watch(result, () => {
    setStorage(key, result.value)
  }, {
    immediate: true
  })
  return result as Ref<ObjectType<T>>
}
