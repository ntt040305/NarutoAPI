import {CharacterItemModel} from './character.item.model';

export interface CharacterModel{
  characters: CharacterItemModel[];
  currentPage: number;
  pageSize:string;
  total: number;

}
