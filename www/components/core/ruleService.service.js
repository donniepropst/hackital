(function (){
    'use strict';
    angular.module('hackital.core')
    .factory('RuleService', [RuleService])

    function RuleService(){
        var service = {
            findRule: findRule
        }

        var rules = {};
            rules["Zero (0) Hour Parking Without Permit #41"] = {};
            rules["\"Two Hour Parking, Monday through Friday, except with Area #1 Permit\""] = {};
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #2 Permit.\""] ={};
            rules["\"Two Hour Parking, 7:00 a.m. - 12 Midnight, Monday through Friday, except with Area #3 Permit.\""] = {};
            rules["\"No Parking 12:00 p.m. - 5:00 p.m. except with area permit #4 during Race Days.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m. - 12 Midnight, Except with Area #5 Permit./Notice Stadium Event: Reserved Parking, 1 Hour Parking Limit, 3:00 p.m. - 10:00 p.m./Monday through Friday, 1:00 p.m. - 12 Midnight, Saturday and Sunday, Except Area #5 Permit Holders.  Tow away Zone.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, Except with Area #6 Permit.\""]={};
            rules["\"Two Hour Parking 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #7 Permit.\""]={};
            rules["\"No Parking except Area 8 Permit Holders.  Tow away Zone.\""]={};
            rules["\"Two Hour Parking, in Area #9/Monday thru Saturday 7:00 a.m. - 6:00 p.m./Sunday 7:00 a.m. - 2:00 p.m./except with Area #9/No Parking in Area #9 Monday thru Sunday morning 6pm-7am/Sunday thru Monday morning 2pm-7am/Except with Area 9 permit/Tow away Zone During Stadium Events/Tow away Zone, except with Area #9 permit.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00  p.m., Monday through Friday, except with Area #10 permit.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #11 Permit.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m.-7:00 p.m., Monday through Friday, except with Area #12 Permit.\""]={};
            rules["\"Three Hour Parking, 8:00 a.m. - 12 Midnight, Sunday through Saturday, except with Area #14 Permit.\""]={};
            rules["\"Two Hour Parking 7:00 a.m. - 7:00 p.m. Monday through Friday/Notice Stadium Event No Parking, 3:00 p.m. - 12 Midnight, Monday through Friday/12 Noon - 12 Midnight, Saturday and Sunday in Area #15 except Permit Holders/Tow away Zone.\""]={
                startTime: '7:00am',
                endTime:'7:00pm',
                startDay: 1,
                endDay: 5,
                exception: 'Or you need an Area #15 permit.  Stadium Event Days: No parking from 3:00pm - 12 midnight M-F or 12 Noon - 12 midnight Sat. and Sun.',
                period: '2'
            };
            rules["\"Two Hour Parking, 7:00 a.m. - 2:00 a.m., Sunday through Saturday except with Area #16 Permit.\""]
                ={
                    startTime: '7:00am',
                    endTime:'2:00am',
                    startDay: 0,
                    endDay: 6,
                    exception: 'Or you need an Area #16 permit',
                    period: '2'
                };
            rules["\"Two Hour Parking 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #17 Permit.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m. - 7:00 p.m., Monday through Friday, except with Area #18 Permit.\""]={};
            rules["\"Two Hour Parking, 7:00 a.m. - 12 Midnight/Notice Stadium Event Restricted Parking/One Hour Parking Limit, 3:00 p.m. - 10:00 p.m., Monday through Friday, 1:00 p.m. - 12 Midnight, Saturday through Sunday, Tow away Zone except with Area #19 Permit.\""]={};
            rules["\"Two Hour Parking 7:00 a.m.- 7:00 p.m. Monday through Friday except with Area #20 Permit\""]={};
            rules["\"Two Hour Parking 2:30 p.m. - 8:30 p.m. Monday through Friday, except with Area #21 Permit.\""]={};
            rules["\"2 HOUR PARKING/SEVEN DAYS FROM 7:00 A.M. - 7:00 PM, WITHOUT VALID RPP STICKER FOR AREA 31\" "]={};


            function findRule(ruleString){
                console.log(ruleString)
                console.log(rules[ruleString]);
            }

        return service;




    }
})();
