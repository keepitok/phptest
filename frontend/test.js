var message = function (status, title, data) {
    if (status) {
        console.log(title, data);
    } else {
        console.error(title, data);
    }
};

var getRandomValue = function () {
    return Math.round(Math.random()*10000);
};

var iHelper = new IframeHelper();

iHelper.onReady(function () {
    message(true, 'App started');
    message(true, 'Current user', iHelper.getCurrentUser());
    message(true, 'Current group', iHelper.getCurrentGroup());
    message(true, 'Current bucket', iHelper.getCurrentBucket());
    message(true, 'Current app', iHelper.getCurrentApp());
    
    iHelper.getProperties(function (status, data) {
        message(status, 'Get properties: ', data);
    });
    
    iHelper.setProperties({
        qwe: getRandomValue(),
        asd: getRandomValue(),
        aaa: getRandomValue()
    }, function (status, data) {
        message(status, 'Set properties: ', data);
    });
   
    /*window.setTimeout(function () {
        iHelper.removeProperties(function (status, data) {
            message(status, 'Properties are removed: ', data);
        });
    },5000);*/
    
    iHelper.getProperty('qwe', function (status, data) {
        message(status, 'Get "qwe" property: ', data);
    });
    
    iHelper.setProperty('asd', 4444, function (status, data) {
        message(status, 'Set "asd" property: ', data);
    });
    
    iHelper.getEventListeners(function (status, data) {
        message(status, 'Get event listeners', data);
    });
    
    iHelper.addEventListener({
        "id": getRandomValue(),
        "displayName": "Page view listener",
        "collectApp": "web",
        "section": "site",
        "definitionId": "page-view"
    }, function (status, data) {
        message(status, 'Add event listeners', data);
    });
    
    iHelper.getProfileSchema(function (status, data) {
        message(status, 'Get profile schema', data);
    });
});