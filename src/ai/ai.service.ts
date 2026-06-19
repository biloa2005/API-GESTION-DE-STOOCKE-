import { Injectable } from '@nestjs/common';
import { STOCK_PROMPT } from 'src/prompts/ia.prompt';
import { GoogleGenAI } from '@google/genai';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AiService {
private ai: GoogleGenAI;
constructor(private configService:ConfigService){
     // Récupère la clé depuis le fichier .env
    const key=this.configService.get<string>('GEMINI_API_KEY');
  //initialise
    this.ai=new GoogleGenAI({apiKey:key})
}
//FONCTION QUESTION A L IA
async ask(question:string){
    const response=await this.ai.models.generateContent({
        model:'gemini-2.5-flash',
        contents:`${STOCK_PROMPT}
        \nquestion:\n
        ${question}`,
    });
    return response.text?.replace(/\n/g, '<br>');
}
}
