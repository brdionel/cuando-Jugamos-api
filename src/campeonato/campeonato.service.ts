import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campeonato } from './interfaces/Campeonato'
import { CreateCampeonatoDTO } from './dto/create-campeonato.dto';

@Injectable()
export class CampeonatoService {

    constructor(@InjectModel('Campeonato') private campeonatoModel: Model<Campeonato>){}

    async getCampeonatos(): Promise<Campeonato[]> {
        const campeonatos =  await this.campeonatoModel.find();
        return campeonatos;
    }

    async getCampeonato(campeonatoID: string): Promise<Campeonato> {
        const campeonato = await this.campeonatoModel.findById(campeonatoID)
        return campeonato;
    } 

    async createCampeonato(campeonato: CreateCampeonatoDTO): Promise<Campeonato>{
        const newCampeonato = new this.campeonatoModel(campeonato)
        console.log(newCampeonato)
        return await newCampeonato.save();
    }

    async deleteCampeonato(campeonatoID: string): Promise<Campeonato>{
        const deletedCampeonato = await this.campeonatoModel.findByIdAndDelete(campeonatoID)
        return deletedCampeonato;
    }

    async updateCampeonato(campeonatoID: string, campeonato: CreateCampeonatoDTO) : Promise<Campeonato>{
        const updatedCampeonato = await this.campeonatoModel.findByIdAndUpdate(campeonatoID, campeonato, { new: true})
        return updatedCampeonato;
    }
}
