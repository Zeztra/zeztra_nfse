import { env } from '@core/config';
import Redis, { Cluster } from 'ioredis';

class RedisCache {
  private redisInstance: Redis | Cluster;

  constructor() {
    this.redisInstance = this.createInstance();
  }

  private createInstance(): Redis | Cluster {
    const nodes = env.REDIS_URL.split(',');

    const useCluster =
      env.NODE_ENV === 'production' ||
      env.NODE_ENV === 'homolog' ||
      env.NODE_ENV === 'staging';

    let redisOptions = {};

    if (useCluster) {
      redisOptions = {
        password: env.REDIS_PASSWORD,
        tls: {
          checkServerIdentity: () => undefined,
        },
      };
    }

    return nodes.length > 1 || useCluster
      ? new Redis.Cluster(nodes, {
          lazyConnect: true,
          redisOptions,
        })
      : new Redis(env.REDIS_URL, {
          lazyConnect: true,
          ...redisOptions,
        });
  }

  async connect(): Promise<void> {
    if (!this.redisInstance) {
      this.redisInstance = this.createInstance();
    }
    await this.redisInstance.connect();

    console.log('Redis connected');
  }

  async disconnect(): Promise<void> {
    if (this.redisInstance) {
      await this.redisInstance.quit();

      console.log('Redis disconnected');
    }
  }

  async getKey(key: string): Promise<string | null> {
    return this.redisInstance.get(key);
  }

  async setValue(
    key: string,
    value: string | number,
    ttlInSeconds?: number | undefined,
  ): Promise<void> {
    if (ttlInSeconds) {
      await this.redisInstance.setex(key, ttlInSeconds, value);
    } else {
      await this.redisInstance.set(key, value);
    }
  }

  async listAppend(
    key: string,
    ...elements: (string | number)[]
  ): Promise<number> {
    return await this.redisInstance.rpush(key, ...elements);
  }

  async listPop(key: string): Promise<string | null> {
    return await this.redisInstance.lpop(key);
  }
}

export default new RedisCache();
