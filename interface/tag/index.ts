import { IPaginate } from '../common'
import { AxiosResponse } from 'axios'
import { IWorks } from '../work/index'
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
  items: ITags[]
}

export interface ITags {
  uid: string
  title: string
  work_total: number
}

export interface ISeachTagRespones extends AxiosResponse {
  data: ISeachTagRes
}

export interface ISeachTagRes {
  isSuccess: boolean
  message?: string
  data: ISeachTagData
}

export interface ISeachTagData extends IPaginate {
  items: IWorks[]
  tagName?: string
}
