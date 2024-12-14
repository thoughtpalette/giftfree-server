import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import * as cheerio from 'cheerio';

@Injectable()
export class LinkService {
    constructor(private readonly httpService: HttpService){}

    async getLink(string: string) {
        const res = await firstValueFrom(this.httpService.get(string))

        console.log(res.data)

        
    //   const $ = cheerio.load(res.data, {
    //     ignoreWhitespace: true,
    //   });

        // return res
    }
}