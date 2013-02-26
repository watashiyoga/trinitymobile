/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 * 
 * The initial developer of trinitymobile-swipe.js is Rob Gerns.
 * Copyright 2012 Rob Gerns.  All rights reserved.*/


/*****************************************************************************
 * Various jQuery Mobile functions to handle swiping gestures
 * and the Android back button.
 *****************************************************************************/

//News page swipe right goes to Directions page.
$('#pageNews').live("swiperight", function(){
    var newPage = $('#pageMap');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//News page swipe left goes to Blog page.
$('#pageNews').live("swipeleft", function(){
    var newPage = $('#pageBlog');
    if (newPage) {    
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//Blog page swipe right goes to News page.
$('#pageBlog').live("swiperight", function(){
    var newPage = $('#pageNews');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//Blog page swipe left goes to Twitter page.
$('#pageBlog').live("swipeleft", function(){
    var newPage = $('#pageTwitter');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//Twitter page swipe right goes to Blog page.
$('#pageTwitter').live("swiperight", function(){
    var newPage = $('#pageBlog');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//Twitter page swipe left goes to Facebook page.
$('#pageTwitter').live("swipeleft", function(){
    var newPage = $('#pageFacebook');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//Facebook page swipe right goes to Twitter page.
$('#pageFacebook').live("swiperight", function(){
    var newPage = $('#pageTwitter');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//Facebook page swipe left goes to Service Times page.
$('#pageFacebook').live("swipeleft", function(){
    var newPage = $('#pageServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//Service Times page swipe left goes to Special Service Times page.
$('#pageServiceTimes').live("swipeleft", function(){
    var newPage = $('#pageSpecialServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage, {
            transition: "slide",
            reverse: false});
        }
    });
//Service Times page, swipe right goes to Facebook page.
$('#pageServiceTimes').live("swiperight", function(){
    var newPage = $('#pageFacebook');
    if (newPage) {
        $.mobile.changePage(newPage, {
            transition: "slide",
            reverse: true});
        }
    });


//Special Service Times swipe right goes to Regular Service Times page.
$('#pageSpecialServiceTimes').live("swiperight", function(){
    var newPage = $('#pageServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//Special Service Times swipe left goes to Calendar page.
$('#pageSpecialServiceTimes').live("swipeleft", function(){
    var newPage = $('#pageCalendar');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//Calendar page swipe right goes to Special Service Times.
$('#pageCalendar').live("swiperight", function(){
    var newPage = $('#pageSpecialServiceTimes');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
        }
    });
//Calendar page swipe left goes to Directions (map) page.
$('#pageCalendar').live("swipeleft", function(){
    var newPage = $('#pageMap');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });

//Directions page swipe right goes to Calendar page.
$('#pageMap').live("swiperight", function(){
    var newPage = $('#pageCalendar');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: true});
         }
    });
//Directions page swipe left goes to News page.
$('#pageMap').live("swipeleft", function(){
    var newPage = $('#pageNews');
    if (newPage) {
        $.mobile.changePage(newPage,  {
            transition: "slide",
            reverse: false});
        }
    });
    
/*Make Android hardware (soft in ICS/JB) back button go back to main page.
$('#pageNews').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageBlog').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageTwitter').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageFacebook').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageServiceTimes').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageCalendar').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageMap').live("pagebeforecreate", function(){
    document.addEventListener("backbutton", onBackKeyDown, false);
    });
$('#pageMain').live("pagecreate", function(){
    document.addEventListener("backbutton", onMainBackKeyDown, false);
    });

//Function that actually makes Android back button navigate to main page.
function onBackKeyDown(){
    var mainMenu = $('#pageMain');
    $.mobile.changePage(mainMenu);
    $('#pageMain').live("pagebeforecreate", function(){
        document.removeEventListener("backbutton", onBackKeyDown, false);
        document.addEventListener("backbutton", onMainBackKeyDown, false);
        });
}

//Function to exit app, since default Android back button behavior was changed.
function onMainBackKeyDown(){
    navigator.app.exitApp();
}*/