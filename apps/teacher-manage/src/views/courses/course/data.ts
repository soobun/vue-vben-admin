import type { VbenFormSchema } from '#/adapter/form';
import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { CourseApi } from '#/api';

import { $t } from '#/locales';

export function useFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'courseName',
      label: $t('courses.course.name'),
      rules: 'required',
    },
    {
      component: 'Textarea',
      fieldName: 'introduction',
      label: $t('courses.course.introduction'),
    },
    {
      component: 'Textarea',
      fieldName: 'outline',
      label: $t('courses.course.outline'),
    },
    {
      component: 'Input',
      fieldName: 'textbook',
      label: $t('courses.course.textbook'),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        buttonStyle: 'solid',
        options: [
          { label: $t('courses.course.course_type.public'), value: 1 },
          { label: $t('courses.course.course_type.private'), value: 0 },
        ],
        optionType: 'button',
      },
      defaultValue: 1,
      fieldName: 'courseType',
      label: $t('courses.course.course_type.name'),
    },
    {
      component: 'Input',
      fieldName: 'courseSn',
      label: $t('courses.course.sn'),
    },
    {
      component: 'RadioGroup',
      componentProps: {
        buttonStyle: 'solid',
        options: [
          { label: $t('common.yes'), value: 1 },
          { label: $t('common.no'), value: 0 },
        ],
        optionType: 'button',
      },
      defaultValue: 1,
      fieldName: 'isApproved',
      label: $t('courses.course.visible'),
    },
    {
      component: 'Select',
      componentProps: {
        allowClear: true,
        filterOption: true,
        mode: 'multiple',
        style: 'width:100%',
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
      fieldName: 'partList',
      label: $t('courses.course.part_list'),
    },
  ];
}

export function useGridFormSchema(): VbenFormSchema[] {
  return [
    {
      component: 'Input',
      fieldName: 'courseName',
      label: $t('courses.course.name'),
    },
  ];
}

export function useColumns<T = CourseApi.Course>(
  onActionClick: OnActionClickFn<T>,
): VxeTableGridOptions['columns'] {
  return [
    {
      field: 'courseName',
      title: $t('courses.course.name'),
      width: 200,
    },
    {
      field: 'courseType',
      title: $t('courses.course.course_type.name'),
      width: 100,
    },
    {
      field: 'introduction',
      minWidth: 100,
      title: $t('courses.course.introduction'),
    },
    {
      align: 'center',
      cellRender: {
        attrs: {
          nameField: 'courseName',
          nameTitle: $t('courses.course.course'),
          onClick: onActionClick,
        },
        name: 'CellOperation',
      },
      field: 'operation',
      fixed: 'right',
      title: $t('system.role.operation'),
      width: 130,
    },
  ];
}
