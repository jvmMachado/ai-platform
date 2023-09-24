import { auth } from '@clerk/nextjs';

import prismadb from './lib/prismadb';
import { MAX_FREE_COUNTS } from './constants';

export const increaseApiCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      data: {
        count: {
          increment: 1,
        },
      },
      where: {
        userId,
      },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userApiLimit = await prismadb.userApiLimit.findFirst({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count! < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) {
    return 0;
  }

  const userLimitCount = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userLimitCount) {
    return 0;
  }

  return userLimitCount.count;
};
