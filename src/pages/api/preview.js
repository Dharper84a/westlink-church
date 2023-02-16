import deliveryClient from "../../../lib/datasource/contentful/delivery";

export default async function handler(req, res) {

    const entryId = req.query?.id;

    if(entryId) {
        const entry = await deliveryClient.entryById(entryId);
        const endpoints = await deliveryClient.endpoints(entry.sys.contentType.sys.id);

        if(endpoints.includes(entry.fields.slug)) {
            // allow
            res.setPreviewData({})
            if(entry.sys.contentType.sys.id === 'event') {
                res.redirect(`/event/${entry.fields.slug}`)
            } else {
                res.redirect(`/${entry.fields.slug}`)
            }
        }
    } else {
        res.redirect('/404');
    }
    
  }
  