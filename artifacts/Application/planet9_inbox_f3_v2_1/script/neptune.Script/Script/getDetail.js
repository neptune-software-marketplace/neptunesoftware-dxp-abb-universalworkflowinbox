function getDetail(id, editable) {
    tabData.setBusy(true);

    sap.n.Planet9.function({
        id: dataSet,
        method: 'Get',
        data: { id },
        success: function (data) {
            toggleEdit(editable, data);

            data.from = new Date(data.from);
            data.to = new Date(data.to);

            modelappData.setData(data);
            dataSaved = modelappData.getJSON();

            modelformDetail.setData(data);

            tabData.setBusy(false);
            ////oApp.to(oPageDetail1);
            showSubstitutionsDetail();

            //toolStartFilter.fireLiveChange();
        },
        error: function (data) {
            tabData.setBusy(false);
            sap.m.MessageToast.show(data.status);
        }
    });
}