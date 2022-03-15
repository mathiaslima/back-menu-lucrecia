import { EntityRepository, Repository } from 'typeorm';

import { PostCompany } from '../entities/PostCompany';

@EntityRepository(PostCompany)
class PostsCompanyRepository extends Repository<PostCompany> {}

export { PostsCompanyRepository };
