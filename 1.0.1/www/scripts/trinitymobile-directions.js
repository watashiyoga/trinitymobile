/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. 
 * 
 * The initial developer of trinitymobile-directions.js is Rob Gerns.
 * Copyright 2012 Rob Gerns.  All rights reserved.*/

/*
 * This file, trinity-directions.js, uses the jQuery UI Google Map 3.0-rc
 * plug-in, but is NOT associated with that project in any way.
 * 
 * jQuery UI Google Map source code, copyrights, and licensing information:
 * http://code.google.com/p/jquery-ui-map/
 */

/*
 * This function is used to show a map of Trinity Church's location
 * and display directions using Google Maps.  This is essentially a 
 * modified version of one of the jQuery UI Google Map plug-in demos.
 * 
 */
// onSuccess Callback
            //   This method accepts a `Position` object, which contains
            //   the current GPS coordinates
            function onSuccess (position) {
                var fromBox = document.getElementById("from");
                fromBox.value = position.coords.latitude + 
                ',' + position.coords.longitude; 
            }

            // onError Callback receives a PositionError object
            function onError(error) {
                var fromBox = document.getElementById("from");
                fromBox.value = "Unable to get your location...";
            }

$(function() { 

    //This forces an immediate refresh to get the map to correctly render.
    $('#pageMap').live("pageshow", function() {
         var options = {enableHighAccuracy: true};
         navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
            
        //create the map with Trinity centered, zoom to street level.
        $('#map_canvas').gmap({'center': '40.69302,-75.20845', 'zoom': 16,
            'disableDefaultUI':true, 'callback': function() {
            var self = this;

            //add a Google Maps marker at Trinity's exact location.
            this.addMarker( { 'position': '40.69302,-75.20845' } );

            //Display the directions when the user taps the appropriate button.
            $('#submit').click(function() {
                self.displayDirections({ 'origin': $('#from').val(),
                    'destination': $('#to').val(),
                    'travelMode': google.maps.DirectionsTravelMode.DRIVING },
                    { 'panel': document.getElementById('directions')},
                    function(response, status) {
                        ( status === 'OK' ) ? 
                                $('#results').show() : $('#results').hide();
                });
                return false;
            });
        }});
    });
});

            