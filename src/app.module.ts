import { Module } from '@nestjs/common';
import { CultureModule } from './culture/culture.module';
import { AppController } from './app.controller';

@Module({
  imports: [CultureModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
