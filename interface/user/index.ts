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
  data: IUser
}

export interface IUser {
  username?: string
  nickname?: string
  avatar?: string
  email?: string
  sign?: string
  introduce?: string
  tel?: string
  qq?: string
  wx?: string
  create_time?: string
}
