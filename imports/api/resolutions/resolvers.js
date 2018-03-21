console.log("==> api/resolutions/resolvers.js");

import ResolutionsCollection from './resolutionscollection';

const ResolutionsResolver = {
    resolutions() {
        console.log("==> api/resolutions/resolvers.js ResolutionsResolver.resolutions");
        return ResolutionsCollection.find({}).fetch()
    }
};

const ResolutionsMutation = {
    createResolution(obj, args, context) {
        console.log('==> api/resolutions/resolvers.js createResolution, obj: ', obj, ', args: ', args, ', context: ', context);
        const resolutionId = ResolutionsCollection.insert({
            name: args.name
        });
        return ResolutionsCollection.findOne(resolutionId);
    }
};

export { ResolutionsResolver, ResolutionsMutation };
