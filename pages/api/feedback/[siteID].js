import { getAllFeedbackSite } from '@/lib/firestore';

export default async function handler(req, res) {
    const siteID = req.query.siteID;
    const feedbacks = await getAllFeedbackSite(siteID);

    res.status(200).json({ feedbacks });
}
