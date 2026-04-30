import { http, HttpResponse } from 'msw';
import { mockupExperiences } from './data';

export const handlers = [
    http.get('/experiences.json', () => {
        return HttpResponse.json(mockupExperiences);
    })
]