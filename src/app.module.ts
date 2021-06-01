import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationController } from './notification/notification.controller';

@Module({
  
 
  imports:[ClientsModule.register([{
    name: 'KAFKA_SERVICE',
    transport:Transport.KAFKA,
    options:{
      client:{
        brokers:[process.env.KAFKA_BROKER_URL],
       },
      consumer:{
        groupId:process.env.KAFKA_GROUP_ID
      }
    } 
  }])],
   controllers: [AppController,NotificationController],
  providers: [AppService],
  exports:[AppService],
 
})
export class AppModule {
  
}
