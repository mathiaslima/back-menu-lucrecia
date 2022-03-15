import { Request, Response } from 'express';

import { PostsCompanyService } from '../services/PostsCompanyService';

class PostsCompanyController {
    async create(request: Request, response: Response) {
        const { user_id, name, phone, description, images } = request.body;

        const postsCompanyService = new PostsCompanyService();

        const postCompany = await postsCompanyService.create({
            user_id,
            name,
            phone,
            description,
            images,
        });

        return response.json(postCompany);
    }

    async showAll(request: Request, response: Response) {
        const postsCompanyService = new PostsCompanyService();

        const postCompanies = await postsCompanyService.findAll();

        return response.json(postCompanies);
    }

}

export { PostsCompanyController };