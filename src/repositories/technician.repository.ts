import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PraticadbDataSource} from '../datasources';
import {Technician, TechnicianRelations} from '../models';

export class TechnicianRepository extends DefaultCrudRepository<
  Technician,
  typeof Technician.prototype.id,
  TechnicianRelations
> {
  constructor(
    @inject('datasources.praticadb') dataSource: PraticadbDataSource,
  ) {
    super(Technician, dataSource);
  }
}
