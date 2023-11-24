import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Technician} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Technician,
  pattern: 'CrudRest',
  dataSource: 'praticadb',
  basePath: '/technicians',
  // readonly: true,
};
module.exports = config;
