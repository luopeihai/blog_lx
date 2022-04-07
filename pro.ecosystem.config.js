module.exports = {
  apps: [
    {
      name: 'blog-pro',
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_BASE_URL: 'http://127.0.0.1:5001/',
        PORT: 3001,
      },
    },
  ],
}
