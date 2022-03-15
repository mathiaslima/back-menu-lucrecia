import {
    getCustomRepository,
    Repository,
} from 'typeorm';
import { PostCompany } from '../entities/PostCompany';
import { PostsCompanyRepository } from '../repositories/PostsCompanyRepository';

interface IPostCompanyCreate {
    user_id: string;
    name: string;
    phone: string;
    description: string;
    images: string[];
}

class PostsCompanyService{
    private postsCompanyRepository: Repository<PostCompany>;

    constructor(){
        this.postsCompanyRepository = getCustomRepository(PostsCompanyRepository);
    }

    async create({ user_id, name, phone, description, images }: IPostCompanyCreate){
        const postCompany = this.postsCompanyRepository.create({
            user_id,
            name,
            phone,
            description,
            images,
        });

        await this.postsCompanyRepository.save(postCompany);

        return postCompany;
    }

    async findAll(){
        return this.postsCompanyRepository.find();
    }
}

export { PostsCompanyService };