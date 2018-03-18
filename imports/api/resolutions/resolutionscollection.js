console.log("==> api/resolutionscollection.js");

import { Mongo } from 'meteor/mongo';

const ResolutionsCollection = new Mongo.Collection("resolutions");

export default ResolutionsCollection;