export const config: {
  [key: string]: string
} = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
  serverBaseUrl: process.env.NEXT_PUBLIC_SERVER_BASE_URL || '',
}
