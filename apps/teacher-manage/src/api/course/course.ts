import type { Recordable } from '@vben/types';

import { requestClient } from '#/api/request';

export namespace CourseApi {
  export interface Course {
    [key: string]: any;
    courseId: number;
    companyId: number;
    courseName: string;
    introduction: string;
    textbook: string;
    coverUrl: string;
    outline: string;
    partList: string;
    courseType: number;
    courseSn: string;
    isApproved: 0 | 1;
  }
}

/**
 * 获取课程列表数据
 */
async function getCourseList(params: Recordable<any>) {
  return requestClient.get<Array<CourseApi.Course>>('/course/list', { params });
}

/**
 * 创建课程
 * @param data 课程数据
 */
async function createCourse(
  data: Omit<CourseApi.Course, 'companyId' | 'courseId'>,
) {
  return requestClient.post('/course', data);
}

/**
 * 更新课程
 *
 * @param courseId 课程ID
 * @param data 课程数据
 */
async function updateCourse(
  courseId: number,
  data: Omit<CourseApi.Course, 'companyId' | 'courseId'>,
) {
  return requestClient.put(`/course/${courseId}`, data);
}

/**
 * 删除课程
 * @param courseId 课程ID
 */
async function deleteCourse(courseId: number) {
  return requestClient.delete(`/course/${courseId}`);
}

export { createCourse, deleteCourse, getCourseList, updateCourse };
