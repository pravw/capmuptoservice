sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/po/purchaseorderapp/test/integration/FirstJourney',
		'com/po/purchaseorderapp/test/integration/pages/POsList',
		'com/po/purchaseorderapp/test/integration/pages/POsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/po/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage
                }
            },
            opaJourney.run
        );
    }
);