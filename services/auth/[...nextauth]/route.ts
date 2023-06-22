import nextAuth from 'next-auth';
import { authConfig } from '@/configs/authConfig';

const handler = nextAuth(authConfig);

export { handler as GET, handler as POST };
