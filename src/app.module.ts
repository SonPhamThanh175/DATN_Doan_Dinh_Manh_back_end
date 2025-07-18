import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadModule } from './upload/upload.module';
import { ProductModule } from './product/product.module';


require('dotenv').config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/huce'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads', 'products'),
      serveRoot: '/api/uploads/products',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads', 'avatars'),
      serveRoot: '/api/uploads/avatars',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'uploads', 'types'),
      serveRoot: '/api/uploads/types',
    }),
    AuthModule,
    UserModule,
    ProductModule,
  ],
})
export class AppModule {}
