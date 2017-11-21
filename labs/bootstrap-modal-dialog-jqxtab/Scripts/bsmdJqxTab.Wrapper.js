
function showBootstrapModalDialogJqxTab() {
    var myModal = document.getElementById("bootStrapModalDialogJqxTab");

    //Remove the Modal if already existing---------------------------------------------
    if (myModal != null) {       
        myModal.parentElement.removeChild(myModal);    
        $(document).off('shown.bs.modal', '#bootStrapModalDialogJqxTab');
        $(document).off('hidden.bs.modal', '#bootStrapModalDialogJqxTab');
        $(document).off('click', '#bootStrapModalDialogJqxTabSave');
    }

    //Create Modal---------------------------------------------------------------------
    var popUpTemplate =
        '<div class="modal fade" role="dialog" data-keyboard="false" data-backdrop="static" id="bootStrapModalDialogJqxTab">' +
        '  <div class="modal-dialog modal-lg">' +
        '    <div class="modal-content" id="bsmdJqxTabContent">' +
        '      <div class="modal-header modal-header-success" id="bsmdDialogJqxTabHeader">' +
        '        <button type="button" class="close" data-dismiss="modal">&times;</button>' +
        '        <h4 class="modal-title">Boostrap Modal Dialog with Jqxtab</h4>' +
        '      </div>' +
        '      <div class="modal-body" id="bsmdJqxTabBody">' +
        '           <div id="bsmdJqxTabBodyElem">' +
        '           </div>' +
        '      </div>' +
        '      <div class="modal-footer" id="bsmdJqxTabFooter">' +
        '        <button id="bootStrapModalDialogJqxTabSave" type="button" class="btn btn-primary">Save</button>' +
        '        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>';
    $(popUpTemplate).modal();   

    //Bind Events-----------------------------------------------------------------------
    $(document).on('shown.bs.modal', '#bootStrapModalDialogJqxTab', function (event) {
        //alert("Open");
        LoadJqxTabs();
        $('#bootStrapModalDialogJqxTab').focus();
    });
    $(document).on('hidden.bs.modal', '#bootStrapModalDialogJqxTab', function (event) {
        //alert("Close");
    });
    $(document).on('click', '#bootStrapModalDialogJqxTabSave', function (event) {
        //alert("Save");
    });

    //User-defined Functions--------------------------------------------------------------
    function LoadJqxTabs() {
        //alert("full link :\n" + window.location + "\n website domain :\n" + window.location.host)        
        //$("#bsmdJqxTabBodyElem").load("/Labs/BootStrapModalDialogJqxTab");
        //alert(window.location.origin);
        //$("#bsmdJqxTabBodyElem").load("http://" + window.location.host + "/Labs/BootStrapModalDialogJqxTab");
        //$("#bsmdJqxTabBodyElem").load(window.rootLocation + "/labs/bootstrap-modal-dialog-jqxtab/index.html");
    }
}