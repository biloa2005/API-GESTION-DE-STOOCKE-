import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { AskDto } from './ai.dto';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService){}
    @Post('ask')
    async ask(@Body() body:AskDto ){
        const answer=await this.aiService.ask(body.question);
        return {
            success:true,
            answer,
        };
    }
}
