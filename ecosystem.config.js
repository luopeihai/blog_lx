module.exports = {
  apps: [
    {
      name: 'blog-test',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        NEXT_PUBLIC_BASE_URL: 'http://127.0.0.1:5000/',
        PORT: 3000,
      },
    },
  ],
}
