import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Time } from './interfaces/Time'
import { CreateTimeDTO } from './dto/create-time.dto';

@Injectable()
export class TimesService {

   constructor(@InjectModel('Time') private timeModel: Model<Time>){}

    async getTimes(): Promise<Time[]> {
        const times =  await this.timeModel.find()
        // find({ _id: {$in:[ "5fb3559d0954e60cf8c2fc01", "5fb355be0954e60cf8c2fc03", "5fac649d9c0850385c63569c",
        // "5fac652a9c0850385c63569e", "5fb356170954e60cf8c2fc0a"]}});
        return times;
    }

    async getTime(timeID: string): Promise<Time> {
        const time = await this.timeModel.findById(timeID)
        return time;
    } 

    async createTime(time: CreateTimeDTO): Promise<Time>{
        const newTime = new this.timeModel(time)
        console.log(newTime)
        return await newTime.save();
    }

    async deleteTime(timeID: string): Promise<Time>{
        const deletedProduct = await this.timeModel.findByIdAndDelete(timeID)
        return deletedProduct;
    }

    async updateTime(timeID: string, time: CreateTimeDTO) : Promise<Time>{
        const updatedTime = await this.timeModel.findByIdAndUpdate(timeID, time, { new: true})
        return updatedTime;
    }

}
