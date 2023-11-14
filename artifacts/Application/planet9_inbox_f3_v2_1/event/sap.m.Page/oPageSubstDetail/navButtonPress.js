let processFunction = function () {
    if (butDetailSetDisplay.getVisible()) {
        sap.n.Planet9.function({
            id: 'Locking',
            method: 'Unlock',
            data: {
                objectType: dataSet,
                objectID: modelappData.oData.id,
            },
            success: function (data) { }
        });
    }

    tabData.clearSelection();
    //sap.n.Planet9.requiredFieldsClear(requiredFields);
    //oApp.back();

if (sap.n) {
    oLayoutMain.backToPage(localViewID + '--oPageSubstitutions');
} else {
    oLayoutMain.to('oPageSubstitutions');
}
    // Cockpit Action
 //   sap.n.Planet9.setToolbarButton(false);
}

// Check for changes
if (dataSaved !== modelappData.getJSON()) {
  //LP 27/06/2023
    // sap.n.Planet9.messageChange(processFunction);
} else {
    processFunction();
}