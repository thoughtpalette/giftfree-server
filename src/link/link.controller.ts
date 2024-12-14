import { Controller, Get, Query } from "@nestjs/common";
import { LinkDto } from "./dto/link-dto";
import { LinkService } from "./link.service";

@Controller()
export class LinkController {
    constructor(private readonly linkService: LinkService) {}
        
    @Get('link')
    getLink(@Query() query: LinkDto) {
        return this.linkService.getLink(query.link)
      }
}