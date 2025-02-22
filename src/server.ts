import { env } from '@core/config';
import server from './app';
import { redis } from '@infra/cache';

async function start() {
  try {
    await redis.connect();

    server.listen(env.PORT, () => {
      console.log('Server running on port %d', env.PORT);
    });
  } catch (error) {
    console.error('Failed to start the server:', error);
    process.exit(1);
  }
}

async function stop() {
  try {
    console.log('Shutting down gracefully...');

    await redis.disconnect();

    const timeout = setTimeout(() => {
      console.error('Forcing shutdown...');
      process.exit(1);
    }, 5000);

    server.close(() => {
      clearTimeout(timeout);
      console.log('Server closed');
      process.exit(0);
    });
  } catch (error) {
    console.error('Failed to shut down gracefully:', error);
    process.exit(1);
  }
}

process.on('SIGTERM', stop);
process.on('SIGINT', stop);
process.on('SIGQUIT', stop);

start();
