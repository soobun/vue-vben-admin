import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'material-symbols:book-3',
      order: 9998,
      title: $t('courses.title'),
    },
    name: 'Courses',
    path: '/courses',
    children: [
      {
        path: '/courses/course',
        name: 'course',
        meta: {
          icon: 'material-symbols:book-5',
          title: $t('courses.course.title'),
        },
        component: () => import('#/views/courses/course/list.vue'),
      },
      {
        path: '/courses/part',
        name: 'part',
        meta: {
          icon: 'material-symbols:book-outline',
          title: $t('courses.part.title'),
        },
        component: () => import('#/views/courses/course/list.vue'),
      },
      {
        path: '/courses/level',
        name: 'level',
        meta: {
          icon: 'material-symbols:flag-circle',
          title: $t('courses.level.title'),
        },
        component: () => import('#/views/courses/course/list.vue'),
      },
      {
        path: '/courses/node',
        name: 'node',
        meta: {
          icon: 'material-symbols:line-end-circle',
          title: $t('courses.node.title'),
        },
        component: () => import('#/views/courses/course/list.vue'),
      },
    ],
  },
];

export default routes;
