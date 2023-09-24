import { checkApiLimit } from '@/api-limit';
import { useProModal } from '@/hooks/use-pro-modal';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { userId } = auth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const openProModal = useProModal((state) => state.onOpen);

  console.log(`USER ID: ${userId}!!!!!!!!!!!`);

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  console.log('CHECANDO API LIMIT!!!!!!!!!!!!');
  const freeTrial = await checkApiLimit();

  console.log(`FREE TRIAL: ${freeTrial}!!!!!!!!!!!`);
  if (!freeTrial) {
    // return new NextResponse('Free trial has expired', { status: 403 });
    console.log('TENTANDO ABRIR MODAL!!!!!!!!!!!!');
    return openProModal();
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: '/api/*',
// };
