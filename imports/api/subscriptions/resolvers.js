console.log("==> api/subscriptions/resolvers.js");

const SubscriptionsResolver = {

    vendors() {
        console.log("==> api/subscriptions/resolvers.js subscriptionsResolver.vendors");
        return vendors;        
    },

    sources() {
        console.log("==> api/subscriptions/resolvers.js subscriptionsResolver.sources");
        return sources;        
    },

    subscriptions() {
        console.log("==> api/subscriptions/resolvers.js subscriptionsResolver.subscriptions");
        return subscriptions;
    },

    subscription(obj, { id }, context) {
        console.log("==> api/subscriptions/resolvers.js subscriptionsResolver.subscription(id)");
        const subscription = subscriptions.find(item => item._id === id);
        return subscription;
    }
};

const vendors = [
    {
        _id: "vendor id 1",
        name: "vendor 1"
    }
]

const sources = [
    {
        _id: "source id 1",
        name: "source name 1" ,
        vendor: vendors[0]
    },
    {
        _id: "source id 2",
        name: "source name 2" ,
        vendor: vendors[0]
    }
];

const subscriptions = [
    {
        _id: "subscription id 1",
        name: "subscription 1",
        description: "subscription description 1",
        source: sources[0]
    },
    {
        _id: "subscription id 2",
        name: "subscription 2",
        description: "subscription description 2",
        source: sources[0]
    },
    {
        _id: "subscription id 3",
        name: "subscription 3",
        description: "subscription description 3",
        source: sources[0]
    },
    {
        _id: "subscription id 4",
        name: "subscription 4",        
        description: "subscription description 4",
        source: sources[1]
    },
    {
        _id: "subscription id 5",
        name: "subscription 5",
        description: "subscription description 5",
        source: sources[1]
    }
];
 

export default SubscriptionsResolver;
