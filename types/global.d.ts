import * as axios from 'axios'

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
