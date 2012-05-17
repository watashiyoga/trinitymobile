/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 * 
 * The initial developer of trinitymobile-navigation.js is Rob Gerns.
 * Copyright 2012 Rob Gerns.  All rights reserved.*/

/*
 * New in 0.1.2: The navigation functions are now contained in a separate
 * JavaScript file (this one).
 */

/*
 * Various jQuery Mobile functions to handle swiping gestures
 * and how the Android hardware back button works.
 * 
 *  *New in 0.1.2: Horizontal swipe gestures on every page for navigation*
 */


/*News page swipe gestures*/
$('#pageNews').live("swiperight", function(){
    var newPage = $('#pageMap');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
$('#pageNews').live("swipeleft", function(){
    var newPage = $('#pageBlog');
    if (newPage) {    
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

/*Blog page swipe gestures*/
$('#pageBlog').live("swiperight", function(){
    var newPage = $('#pageNews');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
$('#pageBlog').live("swipeleft", function(){
    var newPage = $('#pageTwitter');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

/*Twitter page swipe gestures*/
$('#pageTwitter').live("swiperight", function(){
    var newPage = $('#pageBlog');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
$('#pageTwitter').live("swipeleft", function(){
    var newPage = $('#pageFacebook');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

/*Facebook page swipe gestures*/
$('#pageFacebook').live("swiperight", function(){
    var newPage = $('#pageTwitter');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
$('#pageFacebook').live("swipeleft", function(){
    var newPage = $('#pageServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

/*Service Times page swipe gestures*/

//On the Service Times page, users can swipe left to change to Special Services
$('#pageServiceTimes').live("swipeleft", function(){
    var newPage = $('#pageSpecialServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage, {
            transition: "slide",
            reverse: false});
        }
    });
//On the Service Times page, swiping left-to-right changes to Facebook page
$('#pageServiceTimes').live("swiperight", function(){
    var newPage = $('#pageFacebook');
    if (newPage) {
        $.mobile.changePage(newPage, {
            transition: "slide",
            reverse: true});
        }
    });


/*Special Service Times page swipe gestures*/

//Users can swipe left-to-right to change back to Regular Service Times
$('#pageSpecialServiceTimes').live("swiperight", function(){
    var newPage = $('#pageServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//On the Special Services page, swiping right-to-left changes to Calendar page
$('#pageSpecialServiceTimes').live("swipeleft", function(){
    var newPage = $('#pageCalendar');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

/*Calendar page swipe gestures*/
$('#pageCalendar').live("swiperight", function(){
    var newPage = $('#pageSpecialServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
$('#pageCalendar').live("swipeleft", function(){
    var newPage = $('#pageMap');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

/*Directions page swipe gestures*/
$('#pageMap').live("swiperight", function(){
    var newPage = $('#pageCalendar');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
         }
    });
$('#pageMap').live("swipeleft", function(){
    var newPage = $('#pageNews');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//If on the main page and the Back button is pressed, exit the app
$('#pageMain').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onBackKeyDown, true);
    document.addEventListener("backbutton", onMainBackKeyDown, true);
});
function onMainBackKeyDown(){
    navigator.app.exitApp();
}
    
//Make Android hardware Back button go back to main page (unless on main page)
$('#pageNews').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
$('#pageBlog').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
$('#pageTwitter').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
$('#pageFacebook').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
$('#pageServiceTimes').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
$('#pageCalendar').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
$('#pageMap').live("pagebeforecreate", function(){
    document.removeEventListener("backbutton", onMainBackKeyDown, true);
    document.addEventListener("backbutton", onBackKeyDown, true);
    });
//When on any page other than main, back button navigates to main page
function onBackKeyDown(){
    var mainMenu = $('#pageMain');
    $.mobile.changePage(mainMenu);
    document.removeEventListener("backbutton", onBackKeyDown, true);
    document.addEventListener("backbutton", onMainBackKeyDown, true);
}