import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //ConfigModule.forRoot(), // Load environment variables
    // TypeOrmModule.forRoot({
    //   type: 'postgres', // Change this based on your database
    //   host: process.env.DATABASE_HOST,
    //   port: (process.env.DATABASE_PORT, 10),
    //   username: process.env.DATABASE_USER,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true, // Set to false in production
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}