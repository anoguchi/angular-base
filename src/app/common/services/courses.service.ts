import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithID(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithID(id))
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  // courses: Course[] = [
  //   {
  //     id: '1',
  //     title: 'Angular 13 Fundamentals',
  //     description: 'Learn the fundamentals of Angular 13',
  //     percentComplete: 12,
  //     favorite: true
  //   },
  //   {
  //     id: '2',
  //     title: 'Javascript Hard Parts',
  //     description: 'Learn the Javascript like a pro! with Will',
  //     percentComplete: 98,
  //     favorite: true
  //   },
  //   {
  //     id: '3',
  //     title: 'Rapid Application Development Patterns',
  //     description: 'THIS MUST BE DONE BY 3:30',
  //     percentComplete: 44,
  //     favorite: true
  //   }
  // ];
}
