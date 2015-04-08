define([ 'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/_base/window',
    'dojo/on',
    'dojo/dom-construct',
    'dojox/mobile/ProgressIndicator',
    'dojox/mobile/Overlay',
    'dojox/mobile/SimpleDialog',
    'dojox/mobile/Button',
    'dojo/domReady!',
], function (declare, lang, window, on, domConstruct, ProgressIndicator, Overlay, SimpleDialog, Button) {
    return declare(null, {
        _errorUI: undefined,
        hideError: function(){
            if (this._errorUI){
                this._errorUI.hide();
                this._errorUI = undefined;
            }
        },
        showError: function(errmsg){
            if (! this._errorUI){
                this._errorUI=new SimpleDialog();
                window.body().appendChild(this._errorUI.domNode);
                domConstruct.create('div', {class: 'mblSimpleDialogText', innerHTML: errmsg}, this._errorUI.domNode);
                var closeBtn = new Button({class: 'mblSimpleDialogButton mblRedButton', innerHTML: 'Close'});
                on(closeBtn, 'click', lang.hitch(this, function(e){
                    this.hideError();
                }));
                closeBtn.placeAt(this._errorUI.domNode);
            }
            this._errorUI.show();
            return this._errorUI;
        },
        _loginUI: undefined,
        showLogin: function(){
            //TODO
        },
        _loadingUI: undefined,
        showLoading:function(){
            if( ! this._loadingUI ){
                this._loadingUI=ProgressIndicator.getInstance();
            }
            return this._loadingUI.start();
        },
        _spinnerUI: undefined,
        showSpinner:function(){
            if( ! this._spinnerUI ){
                this._spinnerUI=ProgressIndicator.getInstance();
            }
            return this._spinnerUI.start();
        },
    });
});
