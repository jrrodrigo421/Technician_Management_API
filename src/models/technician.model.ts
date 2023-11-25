import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Technician extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    length: 100,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  telephone: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Technician>) {
    super(data);
  }
}

export interface TechnicianRelations {
  // describe navigational properties here
}

export type TechnicianWithRelations = Technician & TechnicianRelations;
