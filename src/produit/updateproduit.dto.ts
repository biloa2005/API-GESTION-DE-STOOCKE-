import { PartialType } from "@nestjs/mapped-types";
import { ProduitDto } from "./produit.dto";

class UpdateProduceDto extends PartialType(ProduitDto){}