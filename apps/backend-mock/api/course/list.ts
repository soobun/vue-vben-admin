import { faker } from '@faker-js/faker';
import { verifyAccessToken } from '~/utils/jwt-utils';
import { unAuthorizedResponse, usePageResponseSuccess } from '~/utils/response';

function generateMockCourseList(count: number) {
  const dataList = [];

  for (let i = 0; i < count; i++) {
    const dataItem = {
      courseId: faker.number.int({ min: 1, max: 1_000_000 }),
      companyId: faker.number.int({ min: 1, max: 100 }),
      courseName: faker.book.title(),
      introduction: faker.lorem.sentence(5),
      textbook: faker.book.title(),
      coverUrl: faker.image.urlPicsumPhotos({ width: 256, height: 256 }),
      outline: faker.lorem.sentence(5),
      partList: JSON.stringify({
        list: faker.helpers.multiple(
          () => faker.number.int({ min: 1, max: 100 }),
          { count: 5 },
        ),
      }),
      courseType: faker.number.int({ min: 1, max: 3 }),
      courseSn: `DATA${faker.number.int({ min: 1001, max: 3000 })}`,
      isApproved: 1,
    };

    dataList.push(dataItem);
  }

  return dataList;
}

const mockData = generateMockCourseList(20);

export default eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }

  const { page = 1, pageSize = 20, courseName } = getQuery(event);
  let listData = structuredClone(mockData);
  if (courseName) {
    listData = listData.filter((item) =>
      item.courseName.toLowerCase().includes(String(courseName).toLowerCase()),
    );
  }
  return usePageResponseSuccess(page as string, pageSize as string, listData);
});
