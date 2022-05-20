export const config: {
  [key: string]: string
} = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '', //前端url请求
  serverBaseUrl: process.env.NEXT_PUBLIC_SERVER_BASE_URL || '', //node请求
  buildUrl: process.env.NEXT_PUBLIC_BUILD_URL || '', //node build
}
