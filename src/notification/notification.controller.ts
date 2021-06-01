import { Body, Controller, Inject, OnModuleInit, Post } from '@nestjs/common';
import { ClientKafka} from '@nestjs/microservices';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Producer } from 'kafkajs';
import { validate } from 'class-validator';
import { INotification } from 'src/interfaces/notification.interface';

@Controller('notifications')
export class NotificationController implements OnModuleInit {
  private kafkaProducer : Producer;
  constructor( @Inject('KAFKA_SERVICE') private clientKafka:ClientKafka) {
  }
  async onModuleInit() {
   this.kafkaProducer = await this.clientKafka.connect() ;
  }
  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto):Promise<INotification> {
    validate(createNotificationDto);
    const result= await this.kafkaProducer.send({
      topic:'notifications-topic',
      messages:[
        {key: Math.random()+"", value: JSON.stringify(createNotificationDto),}
      ]
    });
     return createNotificationDto;
  }

}
