import {
  Global,
  Module,
  NestModule,
  DynamicModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthMiddleware } from './auth.middleware';
import { ConfigInjectionToken, AuthModuleConfig } from './config.interface';
import { SupertokensService } from './supertokens/supertokens.service';

@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService, SupertokensService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }

  static forRoot({
    connectionURI,
    apiKey,
    appInfo,
  }: AuthModuleConfig): DynamicModule {
    return {
      providers: [
        {
          useValue: { appInfo, connectionURI, apiKey },
          provide: ConfigInjectionToken,
        },
      ],
      exports: [],
      imports: [],
      module: AuthModule,
    };
  }
}
