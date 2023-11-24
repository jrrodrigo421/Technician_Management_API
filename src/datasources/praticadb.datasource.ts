import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';


const config = {
  name: 'praticadb',
  connector: 'mssql',
  host: 'localhost',
  port: 1433,
  user: 'sa',
  password: 'root12345',
  database: 'praticadb',
  options: {
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

@lifeCycleObserver('datasource')
export class PraticadbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'praticadb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.praticadb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
