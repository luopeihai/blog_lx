export const dataLocale = {
  weekOne: '周',
  weekTwo: '星期',
  sundayOne: '日',
  sundayTwo: '天',
  monday: '一',
  tuesday: '二',
  wednesday: '三',
  thursday: '四',
  friday: '五',
  saturday: '六',
}
/**
 * 倒计时计算类型,1为直接计算小时,2为需要计算天数
 */
export enum COUNTTYPE {
  COUNTBYHOUR = 1,
  COUNTBYDAY = 2,
}

const formators: any = {
  y: (date: Date, length: number) => {
    const year: number = date.getFullYear()
    return year < 0
      ? 'BC' + -year
      : length < 3 && year < 2000
      ? year % 100
      : year
  },
  M: (date: Date) => {
    return date.getMonth() + 1
  },
  d: (date: Date) => {
    return date.getDate()
  },
  H: (date: Date) => {
    return date.getHours()
  },
  m: (date: Date) => {
    return date.getMinutes()
  },
  N: (date: Date) => {
    const monEn = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    return monEn[date.getMonth()]
  },
  s: (date: Date) => {
    return date.getSeconds()
  },
  e: (date: Date, length: number) => {
    return (
      (length === 1
        ? ''
        : length === 2
        ? dataLocale.weekOne
        : dataLocale.weekTwo) +
      [
        length === 2 ? dataLocale.sundayOne : dataLocale.sundayTwo,
        dataLocale.monday,
        dataLocale.tuesday,
        dataLocale.wednesday,
        dataLocale.thursday,
        dataLocale.friday,
        dataLocale.saturday,
      ][date.getDay()]
    )
  },
}

export const formatDate = (format: string, date: string | number | Date) => {
  return (format || 'yyyy/MM/dd HH:mm:ss').replace(/(\w)\1*/g, (all, key) => {
    if (key in formators) {
      date =
        typeof date === 'string' || typeof date === 'number'
          ? new Date(date)
          : date
      key = '' + formators[key](date, all.length)
      while (key.length < all.length) {
        key = '0' + key
      }
      all = key
    }
    return all
  })
}
