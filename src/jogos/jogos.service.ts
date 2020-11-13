import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jogo } from './interfaces/Jogo';
import { Time } from '../times/interfaces/Time'
import { CreateJogo } from './dto/create-jogo.dto'

@Injectable()
export class JogosService {

    constructor(@InjectModel('Jogo') private jogoModel: Model<Jogo>){}

    async getJogos(): Promise<Jogo[]> {
        const jogos =  await this.jogoModel.find()
        .populate('idLocal')
        .populate('idVisitante')
        .exec()
        return jogos;
    }

    async getJogosById(idTime: string): Promise<Jogo[]>{
        const jogos =  await this.jogoModel.find({ $or:[ {'idLocal':idTime}, {'idVisitante':idTime}]})
            .populate('idLocal')
            .populate('idVisitante')
            .exec()
        return jogos;
    }

    async createJogo(jogo: CreateJogo): Promise<Jogo>{
        const newJogo = new this.jogoModel(jogo)
        console.log(newJogo)
        return await newJogo.save();
    }

    async deleteJogo(idJogo: string): Promise<Jogo>{
        const deletedJogo = await this.jogoModel.findByIdAndDelete(idJogo);
        return deletedJogo;
    }

    async updateJogo(idJogo: string, jogo): Promise<Jogo>{
        const updatedJogo = await this.jogoModel.findByIdAndUpdate(idJogo, jogo, { new: true});
        return updatedJogo;
    }
}
