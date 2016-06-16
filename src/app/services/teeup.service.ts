import { Injectable } from 'angular2/core';
import {TEEUPS} from './mock-teeups';
import {TEEUP_DETAILS} from './mock-teeup-details';
@Injectable()

export class TeeupService {
    
    getTeeups(){
        return Promise.resolve(TEEUPS);
    }
    getTeeupById(id: number){
        return Promise.resolve(TEEUP_DETAILS);
    }

}