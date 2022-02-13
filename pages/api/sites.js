// import defaultApp from '@/lib/admin';
import { getAllSites } from '@/lib/firestore';

export default async function handler(_, res) {
    let sites = await getAllSites();

    res.status(200).json({ sites });
}
