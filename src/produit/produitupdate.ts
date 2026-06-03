import { PartialType } from "@nestjs/mapped-types";
import { AchatDto } from "src/achat/achat.dto";

export class ProduceUpdateDto extends PartialType(AchatDto){}