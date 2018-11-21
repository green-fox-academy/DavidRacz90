'use strict'

export abstract class Animal {

  protected name: string;
  protected age: number;
  protected gender: string;
  protected size: string;
  

  constructor(name: string, age?: number, gender?: string, size?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.size = size;
  }

  abstract getName();

  abstract breed();

  abstract eat();

}