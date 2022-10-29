import contentClient from "./client";

export class DeliveryClient {
    constructor(client) {
        this.contentClient = !client ? contentClient : client;
    }


}
export class Delivery {
    constructor(client) {
        this._client = client;
        this._errors = [];
        this.load()
    }
    async load() {
        // const contentTypes = await this.client().getContentTypes();
        // console.log('contentTypes', contentTypes);
        // contentTypes.items.forEach((contentType) => {
        //     console.log(contentType);
        //     console.log(contentType.sys)
        //     console.log(contentType.fields);
        // })
        
    }
    error(e) {
        this._errors.push(e);
        return e;
    }
    errors() { return this._errors; }

    client() { return this._client || null ; }

    async endpoints(contentType) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";

            const data = await this.client().getEntries({
                "sys.contentType.sys.id": contentType,
            });
    
            return data.items.map(entry => {
                return entry.fields.slug;
            });
        } catch (e) {
            return this.error(e);
        }
    }

    async entries(contentType) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";
            
            const entries = await contentClient.getEntries({
                content_type: contentType,
            });
    
            if (!entries.total) throw "Failed to get entries";
            
            return {
                count: entries.total,
                items: entries?.items || [],
            };

        } catch (e) {
            return this.error(e)
        }
    }

    async entry(contentType, key, value) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";
            if (!key) throw "No search key specified";
    
            const objectKey = `fields.${key}`;
    
            const searchParams = {
                content_type: contentType,
            };
    
            searchParams[objectKey] = value;
    
            const entries = await contentClient.getEntries(searchParams);
    
            if (!entries.total) throw "Failed to get entries";
    
            if (entries.total > 0) {
                const theEntry = entries?.items[0] || null;
                
                if(theEntry) {
                    // console.log('theEntry', theEntry);
                    // Check for any fields that is an array
                    // const theFields = await this.recursiveFields(theEntry.fields).then((res) => {
                    //     console.log('res', res);
                    // });

                    // console.log('theFields', theFields);
                    
                   

                    return theEntry;
                } else {
                    return null;
                }
                
                
                // console.log('Entries', entries);
                // return entries?.items[0] || null;
            } else {
                return null;
            }
        } catch (e) {
            return this.error(e);
        }
    }

    async recursiveFields(fields) {
        
        const thePromise = new Promise((resolve) => {
            const builtFields = {};
            const neededCount = Object.entries(fields).length;

            for(const [key,value] of Object.entries(fields)) {
                
                if(Array.isArray(value)) {
                    // console.log('Field Array Found', key);
                    Object.defineProperty(builtFields, key, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value.map(async(subField) => {
                            // console.log('subField', subField);
                            // console.log('subField.sys', subField.sys);
                            const contentType = subField.sys?.contentType?.sys?.id || null;
    
                            if(contentType) {
                                return await this.recursiveFields(subField.fields).then((res) => {
                                    return(
                                        {
                                            contentType: contentType,
                                            fields: res
                                        }
                                    )
                                });
                            } else {
                                return await this.entryById(subField.sys.id).then((res) => {
                                    return (
                                        {
                                            contentType: subField.sys.linkType,
                                            fields: res
                                        }
                                    )
                                });
                            }   
                        })
                    })
    
                } else {
                    Object.defineProperty(builtFields, key, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    })
                   
                }
    
                // console.log('Built Fields', Object.entries(builtFields).length);
    
                if(Object.entries(builtFields).length === neededCount) {
                    // console.log('Ready to resolve');
                    resolve(builtFields);
                }
            }
        })
        
        return thePromise.then((res) => {
            // console.log(res);
            return res;
        })
        
    }

    async entryById(entryId) {
        try {
            if(!this.client()) throw "No client loaded";
            if (!entryId) throw "No entry id specified";
    
    
            const entry = await contentClient.getEntry(entryId);
            
            // console.log('Entry', entry);
            return entry;
           
        } catch (e) {
            return this.error(e);
        }

    }

    async getEntriesOfContentType(contentType = null) {
        try {
            if(!this.client()) throw "No client loaded";
            if(!contentType) throw "No content type supplied";

            const entries = await contentClient
        }catch(e) {
            return this.error(e);
        }
    }
    async homepage(contentType = 'homepage') {
        try {
            if(!this.client()) throw "No client loaded";
            if (!contentType) throw "No content type specified";
    
            const entries = await contentClient.getEntries({
                content_type: contentType,
            });
    
            if (!entries.total) throw "Failed to get entries";
    
            if (entries.total > 0) {
                return entries?.items[0] || null;
            } else {
                return null;
            }
        } catch (e) {
            return this.error(e);
        }
    }
    
    async getPage(slug, contentType = 'page') {
        try {
            const pages = await contentClient.getEntries({
                content_type: contentType,
                'fields.slug': slug
            });

            if(pages.total > 0) {
                return pages.items[0];
            } else {
                return false;
            }
            // console.log(pages)
            // const contentTypes = await contentClient.getContentTypes();
            // console.log(contentTypes);
            // const pages = await contentClient.getEntries({
            //     content_type: contentType
            // })

            // console.log(pages);
        }catch(e) {
            console.log('ERROR - Delivery.getPath()');
            console.log(e);
            return false;
        }
    }

    async get() {
        try {
            if(!this.client()) throw "No client loaded";

      
        }catch(e) {
            return this.error(e);
        }
    }
    
} /* END - Delivery Class */

const deliveryClient = new Delivery(contentClient);
export default deliveryClient;