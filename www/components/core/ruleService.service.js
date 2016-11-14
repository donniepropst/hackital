(function (){
    'use strict';
    angular.module('hackital.core')
    .factory('RuleService', [RuleService])

    function RuleService(){
        var service = {
            findRule: findRule
        }
        var time;
        var date;
        var weekday;
        var rules = {};
            rules["Zero (0) Hour Parking Without Permit #41"] = function(){
                return genericTest(0,0,0,0,0,24,41);
            };
            rules["\"Two Hour Parking, Monday through Friday, except with Area #1 Permit\""] = function(){
                return genericTest(0, 24,0, 1, 5, 2, 1);
            };
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #2 Permit.\""] =function(){
                return genericTest(7, 19, 0, 1, 5, 2, 2);
            };
            rules["\"Two Hour Parking, 7:00 a.m. - 12 Midnight, Monday through Friday, except with Area #3 Permit.\""] = function(){
                return genericTest(7, 23, 59, 1, 5, 2, 3);
            };
            rules["\"No Parking 12:00 p.m. - 5:00 p.m. except with area permit #4 during Race Days.\""]=function(){

            };
            rules["\"Two Hour Parking, 7:00 a.m. - 12 Midnight, Except with Area #5 Permit./Notice Stadium Event: Reserved Parking, 1 Hour Parking Limit, 3:00 p.m. - 10:00 p.m./Monday through Friday, 1:00 p.m. - 12 Midnight, Saturday and Sunday, Except Area #5 Permit Holders.  Tow away Zone.\""]=function(){

            };
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, Except with Area #6 Permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 6);
            };
            rules["\"Two Hour Parking 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #7 Permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 7);
            };
            rules["\"No Parking except Area 8 Permit Holders.  Tow away Zone.\""]=function(){
                return genericTest(0,0,0, 0,9, 24, 8);
            };
            rules["\"Two Hour Parking, in Area #9/Monday thru Saturday 7:00 a.m. - 6:00 p.m./Sunday 7:00 a.m. - 2:00 p.m./except with Area #9/No Parking in Area #9 Monday thru Sunday morning 6pm-7am/Sunday thru Monday morning 2pm-7am/Except with Area 9 permit/Tow away Zone During Stadium Events/Tow away Zone, except with Area #9 permit.\""]=function(){

            };
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00  p.m., Monday through Friday, except with Area #10 permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 10);
            };
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #11 Permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 11);
            };
            rules["\"Two Hour Parking, 7:00 a.m.-7:00 p.m., Monday through Friday, except with Area #12 Permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 12);
            };
            rules["\"Three Hour Parking, 8:00 a.m. - 12 Midnight, Sunday through Saturday, except with Area #14 Permit.\""]=function(){
                return genericTest(8, 24, 0, 0, 6, 3, 14);
            };
            rules["\"Two Hour Parking 7:00 a.m. - 7:00 p.m. Monday through Friday/Notice Stadium Event No Parking, 3:00 p.m. - 12 Midnight, Monday through Friday/12 Noon - 12 Midnight, Saturday and Sunday in Area #15 except Permit Holders/Tow away Zone.\""]=function(){

            };
            rules["\"Two Hour Parking, 7:00 a.m. - 2:00 a.m., Sunday through Saturday except with Area #16 Permit.\""]=function(){

                };
            rules["\"Two Hour Parking 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #17 Permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 17);
            };
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #18 Permit.\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 18);
            };
            rules["\"Two Hour Parking, 7:00 a.m. - 12 Midnight/Notice Stadium Event Restricted Parking/One Hour Parking Limit, 3:00 p.m. - 10:00 p.m., Monday through Friday, 1:00 p.m. - 12 Midnight, Saturday through Sunday, Tow away Zone except with Area #19 Permit.\""]=function(){

            };
            rules["\"Two Hour Parking 7:00 a.m.- 7:00 p.m. Monday through Friday except with Area #20 Permit\""]=function(){
                return genericTest(7, 19, 0, 1, 5, 2, 20);
            };
            rules["\"Two Hour Parking 2:30 p.m. - 8:30 p.m. Monday through Friday, except with Area #21 Permit.\""]=function(){
                return genericTest(14, 20, 30, 1, 5, 2, 21);
            };
            rules["\"2 HOUR PARKING/SEVEN DAYS FROM 7:00 A.M. - 7:00 PM, WITHOUT VALID RPP STICKER FOR AREA 31\" "]=function(){
                return genericTest(7, 19,0,0, 6, 2, 31);
            };


            function findRule(ruleString){
                date = new Date();
                weekday = date.getDay();
                return rules[ruleString]();
            }

            function genericTest(startTime, endTimeHour, endTimeMinute, startDay, endDay, period, permitNumber){

                var displayText1;
                var displayText2;
                //there are parking restrictions
                if (weekday >= startDay && weekday <= endDay){
                    if(moment().hour() >= startTime && moment().hour() <= endTimeHour){
                        displayText1 = "The maximum parking time in this area is " + period + " hours, until " + endTimeHour + ":" + endTimeMinute + ".";
                        displayText2=  "There is an exception for Permit #" + permitNumber + " holders.";
                        return {displayText1:displayText1, displayText2:displayText2, safe: false};
                    }else{
                        displayText1 = "There are no restrictions for parking in this area at this time!";
                        displayText2 = "";
                        return {displayText1:displayText1, displayText2:displayText2, safe: true};
                    }
                }else{ //no restrictions, safe to park
                    displayText1 = "There are no restrictions for parking in this area at this time!";
                    displayText2 = "";
                    return {displayText1:displayText1, displayText2:displayText2, safe: true};
                }
            }



        return service;




    }
})();
