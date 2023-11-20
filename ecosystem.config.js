module.exports = {
  apps: [
    {
      name: 'vallentuna-backend-production',
      script: './dist/main.js',
      instances: 4,
      exec_mode: 'cluster',
      watch: true,
      env: {
        PORT: 8000,
        NODE_ENV: 'production',
      },
    },
  ],
};
