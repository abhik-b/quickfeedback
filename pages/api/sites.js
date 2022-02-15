import { auth } from '@/lib/admin';
import { getAllSites, getAuthorSites } from '@/lib/firestore';

export default async function handler(req, res) {
    const user = await auth.verifyIdToken(req.headers.token);
    let sites = await getAuthorSites(user.uid);
    res.status(200).json({ sites });
}
