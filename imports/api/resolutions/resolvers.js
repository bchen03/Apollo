console.log("==> api/resolutions/resolvers.js");

import ResolutionsCollection from './resolutionscollection';

const ResolutionsResolver = {
    resolutions() {
        console.log("==> api/resolutions/resolvers.js ResolutionsResolver.resolutions");
        return ResolutionsCollection.find({}).fetch()
        // return [
        //     {
        //         _id: "some id 1",
        //         name: "some name 1"
        //     },
        //     {
        //         _id: "some id 2",
        //         name: "some name 2"
        //     }
        // ];
    }
};

const newResolution = (name) => {
    console.log("==> api/resolutions/resolvers.js newResolution, name:", name);
    const resolutionId = ResolutionsCollection.insert({
        name: name
    });
    return ResolutionsCollection.findOne(resolutionId);
}

//const res = Resolutions.find({}).fetch();
//console.log("Resolutions.fetch: ", res);


export default ResolutionsResolver;
export { newResolution };
