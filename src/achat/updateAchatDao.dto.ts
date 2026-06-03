import { PartialType } from "@nestjs/mapped-types";
import { AchatDto } from "./achat.dto";

export class UpdateAchat extends PartialType(AchatDto){}