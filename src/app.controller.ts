import { Controller, Logger, Post, Body } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  // Create a logger instance
  private logger = new Logger('AppController');

  // Inject the math service
  constructor(private mathService: MathService) {}

  @MessagePattern('add')
  async accumulate(data: number[])  {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }

  @MessagePattern('multiply')
  async multiply(data: number[])  {
    this.logger.log('Multiply ' + data.toString());
    return this.mathService.multiply(data);
  }
  
}
