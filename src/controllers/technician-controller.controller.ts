import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Technician} from '../models';
import {TechnicianRepository} from '../repositories';

export class TechnicianControllerController {
  constructor(
    @repository(TechnicianRepository)
    public technicianRepository: TechnicianRepository,
  ) { }

  @post('/technicians')
  @response(200, {
    description: 'Technician model instance',
    content: {'application/json': {schema: getModelSchemaRef(Technician)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Technician, {
            title: 'NewTechnician',
            exclude: ['id'],
          }),
        },
      },
    })
    technician: Omit<Technician, 'id'>,
  ): Promise<Technician> {
    return this.technicianRepository.create(technician);
  }

  @get('/technicians/count')
  @response(200, {
    description: 'Technician model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Technician) where?: Where<Technician>,
  ): Promise<Count> {
    return this.technicianRepository.count(where);
  }

  @get('/technicians')
  @response(200, {
    description: 'Array of Technician model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Technician, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Technician) filter?: Filter<Technician>,
  ): Promise<Technician[]> {
    return this.technicianRepository.find(filter);
  }

  @patch('/technicians')
  @response(200, {
    description: 'Technician PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Technician, {partial: true}),
        },
      },
    })
    technician: Technician,
    @param.where(Technician) where?: Where<Technician>,
  ): Promise<Count> {
    return this.technicianRepository.updateAll(technician, where);
  }

  @get('/technicians/{id}')
  @response(200, {
    description: 'Technician model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Technician, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Technician, {exclude: 'where'}) filter?: FilterExcludingWhere<Technician>
  ): Promise<Technician> {
    return this.technicianRepository.findById(id, filter);
  }

  @patch('/technicians/{id}')
  @response(204, {
    description: 'Technician PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Technician, {partial: true}),
        },
      },
    })
    technician: Technician,
  ): Promise<void> {
    await this.technicianRepository.updateById(id, technician);
  }

  @put('/technicians/{id}')
  @response(204, {
    description: 'Technician PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() technician: Technician,
  ): Promise<void> {
    await this.technicianRepository.replaceById(id, technician);
  }

  @del('/technicians/{id}')
  @response(204, {
    description: 'Technician DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.technicianRepository.deleteById(id);
  }
}
