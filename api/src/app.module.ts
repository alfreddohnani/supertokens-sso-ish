import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule.forRoot({
      connectionURI: 'http://localhost:3567', //!This is where the supertokens core is running
      appInfo: {
        appName: 'auth-app',
        apiDomain: 'http://localhost:3000',
        websiteDomain: 'http://localhost:3001', //! This is the auth app URL
        apiBasePath: '/',
        websiteBasePath: '/',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
