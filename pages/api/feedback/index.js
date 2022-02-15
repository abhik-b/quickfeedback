import { getAuthorFeedbacks } from '@/lib/firestore';
import { auth } from '@/lib/admin';

export default async function handler(req, res) {
    const user = await auth.verifyIdToken(req.headers.token);
    const feedbacks = await getAuthorFeedbacks(user.uid);

    res.status(200).json({ feedbacks });
}
