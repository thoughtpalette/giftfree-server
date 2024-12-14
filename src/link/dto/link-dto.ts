import { IsUrl } from "class-validator";

export class LinkDto {
  @IsUrl({ require_protocol: false })
  link: string;
}