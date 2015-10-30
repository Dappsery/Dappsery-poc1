/**
Template Controllers

@module Templates
*/

/**
The body template

@class [template] body
@constructor
*/

Template.body.helpers({
    /**
    Chooses the view to render at start

    @method renderApp
    */
    'renderApp': function(){
        if(_.isEmpty(location.hash)) {
            $('title').text('Mist');
            return 'layout_main';
        }
        if(~location.hash.indexOf('#splashScreen')) {
            return 'popupWindows_splashScreen';
        }
        if(~location.hash.indexOf('#loadingWindow')) {
            return 'popupWindows_loadingWindow';
        }
        if(location.hash === '#requestAccount') {
            // $('title').text(TAPi18n.__('mist.popupWindows.requestAccount.title')
            return 'popupWindows_requestAccount';
        }
        if(location.hash === '#unlockMasterPassword') {
            // $('title').text(TAPi18n.__('mist.popupWindows.requestAccount.title')
            return 'popupWindows_unlockMasterPassword';
        }
        if(location.hash === '#sendTransactionConfirmation') {
            // $('title').text(TAPi18n.__('mist.popupWindows.requestAccount.title')
            return 'popupWindows_sendTransactionConfirmation';
        }
    }
});