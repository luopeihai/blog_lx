import { IPaginate } from '../common'
import { AxiosResponse } from 'axios'
/**
 * 返回结构通用信息
 */
export interface IRespones extends AxiosResponse {
  data: IDataRes
}

export interface IDataRes {
  isSuccess: boolean
  message?: string
  data: IData
}

export interface IData extends IPaginate {
  items: IWorks[]
}

export interface IWorks {
  uid: string
  title: string
  description: string
  cover: string
  pics: string
  tags_id: string
  create_time: string
}
