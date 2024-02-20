function ReRun() {

    let dataMode = "WorkflowInbox";
    
    const current = modelappData.oData;


    let n = 1;
    if (!modelappControl.oData.mySubst) {
        n = 2;
    }

    var d = new Date();
    d.setDate(d.getDate() - n);
    const dStart = d.toISOString();

    var d1 = new Date();
    const tod = d1.toISOString();

    //Rerun only for 1 and 2 status (New and inProcess)
    let tempData = { "dateStart": dStart, "dateEnd": tod, "pagination": { "skip": 0, "take": 500, "order": { "updatedAt": "DESC" } }, "status": ["2", "1"] }

    sap.ui.core.BusyIndicator.show(0);
    sap.n.Planet9.function({
        id: "WorkflowMonitor",
        method: "List",
        data: tempData,
        success: function (data) {
        
            sap.ui.core.BusyIndicator.hide();

            for (let i = 0; i < data.runtime.length; i++) {
                let reRunData = {};
                let curr = data.runtime[i];
                reRunData.id = curr.id;
                reRunData.deleteCurrent = true;  //deletes allready in inbox from earlier re-run if true
    
                //ReRun Determinaton
                sap.n.Planet9.function({
                    id: 'WorkflowInbox',
                    method: 'ReRunApproverDetermination',
                    data: reRunData,
                    success: function (data) {
                        sap.m.MessageToast.show(txtSubstReRun.getText());
                    }

                });
            }

          //oButUpdate.firePress();
           

        },
        error: function (data) {
            sap.m.MessageToast.show('Error! - reRun');
            sap.ui.core.BusyIndicator.hide();
        }

    });


}