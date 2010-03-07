/*
 * jLinq Tests
 * ---------------------------------
 * www.hugoware.net
 * License: Attribution-Share Alike
 * http://creativecommons.org/licenses/by-sa/3.0/us/
 */
 
setTimeout(function() {
(function(tests) {
    var self = this;
    self.index = 0;
    self.errors = [];
    self.target = document.getElementById("results");

    this.assert = function(ok, msg) {
        if (ok) { return; }                    
        self.errors.push(msg);
    };

    var test = function() {
	
        //reset
        self.errors = [];
        
        //try the method
        try {
			//document.body.innerHTML += "<hr/>" + tests[self.index].name;
            this.current = tests[self.index].method;
            this.current();
        }
        catch (e) {
            self.errors.push("Exception: " + e);
        }
        
        //if not okay, display the errors
        var result = ["<div class='result result-"];
        if (self.errors.length > 0) {
            result.push("error' >");
            result.push("<div class='result-title'>#" + (self.index + 1) + ": " + tests[self.index].name  + "</div>");
            result.push("<div class='result-errors' >" + self.errors.join("<br />") + "</div>");
        }
        else {
            result.push("success' >");
            result.push("<div class='result-title'>#" + (self.index + 1) + ": " + tests[self.index].name  + "</div>");
        }
        result.push("</div>");
        self.target.innerHTML += result.join("");
        
        
        //set the next test
        self.index++;
        if (self.index >= tests.length) { return; }
        setTimeout(test, 1);
    
    };

    //start the tests
    test();

})([

    //Actual Tests
    //=============================================================================
    
	{name:"From works when using a normal array",
    method:function() {
        var results = jLinq.from([0]).select();
        this.assert(results.length == 1, "Did not select records correctly.");
    }},
	
	{name:"From works when using a delegate",
    method:function() {
        var results = jLinq.from(function() { return [0]; }).select();
        this.assert(results.length == 1, "Did not select records correctly.");
    }},
	
	{name:"From works when using a an unexpected type",
    method:function() {
        var results = jLinq.from("something").select();
        this.assert(results.length == 1, "Did not select records correctly.");
    }},
	
    {name:"Select ALL Records Matches Total Records",
    method:function() {
        var results = jLinq.from(data.users).select();
        this.assert(results.length == data.users.length, "Did not return all expected records.");
    }},

    {name:"Select NO Records Returns Zero Results",
    method:function() {
        var results = jLinq.from(data.users).startsWith("fakefieldname", 10112104).select();
        this.assert(results.length == 0, "Did not return zero records.");
    }},

    {name:"Select Distinct Boolean Returns TWO Types",
    method:function() {
        var results = jLinq.from(data.users).distinct("admin");
        this.assert(results.length == 2, "Did not return all expected records.");
    }},
    
    {name:"Select Distinct Boolean (Admin) Returns TWO Types",
    method:function() {
        var results = jLinq.from(data.users).distinct("admin");
        this.assert(results.length == 2, "Failed to find only two types.");
    }},
    
    {name:"Select Distinct Number (Age) Returns 23 Records",
    method:function() {
        var results = jLinq.from(data.users).distinct("age");
        this.assert(results.length == 23, "Failed to find exactly 23 ages.");
    }},
    
    {name:"Order By Number (Age) Is the Correct Order",
    method:function() {
        var results = jLinq.from(data.users).orderBy("age").select();
        this.assert(
            (results[0].age == 12 && 
            results[1].age == 14 && 
            results[2].age == 14 && 
            results[3].age == 16 && 
            results[4].age == 17 && 
            results[5].age == 18 && 
            results[6].age == 20 && 
            results[7].age == 21 && 
            results[8].age == 21 && 
            results[9].age == 21 &&
            results[10].age == 22 && 
            results[11].age == 23 && 
            results[12].age == 24 && 
            results[13].age == 25 && 
            results[14].age == 29 && 
            results[15].age == 32 && 
            results[16].age == 32 && 
            results[17].age == 32 && 
            results[18].age == 34 && 
            results[19].age == 38 &&
            results[20].age == 38 && 
            results[21].age == 40 && 
            results[22].age == 44 && 
            results[23].age == 45 && 
            results[24].age == 45 && 
            results[25].age == 45 && 
            results[26].age == 56 && 
            results[27].age == 61 && 
            results[28].age == 65 && 
            results[29].age == 67 &&
            results[30].age == 73 && 
            results[31].age == 73),
            "Did not return in the correct order."
            );
    }},
    
    {name:"Order By (Descending) Number (Age) Is the Correct Order",
    method:function() {
        var results = jLinq.from(data.users).orderBy("-age").select();
        //undo the distinct
        results.reverse();
        this.assert(
            (results[0].age == 12 && 
            results[1].age == 14 && 
            results[2].age == 14 && 
            results[3].age == 16 && 
            results[4].age == 17 && 
            results[5].age == 18 && 
            results[6].age == 20 && 
            results[7].age == 21 && 
            results[8].age == 21 && 
            results[9].age == 21 &&
            results[10].age == 22 && 
            results[11].age == 23 && 
            results[12].age == 24 && 
            results[13].age == 25 && 
            results[14].age == 29 && 
            results[15].age == 32 && 
            results[16].age == 32 && 
            results[17].age == 32 && 
            results[18].age == 34 && 
            results[19].age == 38 &&
            results[20].age == 38 && 
            results[21].age == 40 && 
            results[22].age == 44 && 
            results[23].age == 45 && 
            results[24].age == 45 && 
            results[25].age == 45 && 
            results[26].age == 56 && 
            results[27].age == 61 && 
            results[28].age == 65 && 
            results[29].age == 67 &&
            results[30].age == 73 && 
            results[31].age == 73),
            "Did not return in the correct order."
            );
    }},
    
    {name:"Select startsWith('first', 'a') Returns 5 Results in Correct Order (Ignoring case)",
    method:function() {
        var results = jLinq.from(data.users).startsWith("first","a").orderBy("first").select();
        this.assert(results.length == 5, "Did not return the correct number of records.");
        this.assert((
            results[0].first == "Abby" &&
            results[1].first == "Abigail" &&
            results[2].first == "Adam" &&
            results[3].first == "Audrey" &&
            results[4].first == "Ava"), "Did not return the records in the correct order.");
    }},
    
    {name:"Select endsWith('first', 'y') Returns 5 Results in Correct Order (Ignoring case)",
    method:function() {
        var results = jLinq.from(data.users).endsWith("first","y").orderBy("first").select();
        this.assert(results.length == 5, "Did not return the correct number of records.");
        this.assert((
            results[0].first == "Abby" &&
            results[1].first == "Audrey" &&
            results[2].first == "Haley" &&
            results[3].first == "Lilly" &&
            results[4].first == "Mary"), "Did not return the records in the correct order.");
    }},
    
    {name:"Select contains('first', 'g') Returns 4 Results in Correct Order (Ignoring case)",
    method:function() {
        var results = jLinq.from(data.users).contains("first","g").orderBy("first").select();
        this.assert(results.length == 4, "Did not return the correct number of records.");
        this.assert((
            results[0].first == "Abigail" &&
            results[1].first == "Logan" &&
            results[2].first == "Margret" &&
            results[3].first == "Paige"), "Did not return the records in the correct order.");
    }},
	
	{name:"OrderBy works with multiple parameters",
    method:function() {
		//Opera browser was a PAIN to get this work work...
        var results = jLinq.from(data.users).greater("age", 60).orderBy("admin","first").select();
        this.assert(results.length == 5, "Did not return the correct number of records.");
        this.assert((
            results[0].first == "Abby" &&
            results[1].first == "Owen" &&
            results[2].first == "Zach" &&
            results[3].first == "Lilly"&&
            results[4].first == "Mary"), "Did not return the records in the correct order.");
    }},
	
	{name:"OrderBy works with multiple parameters, including descending",
    method:function() {
		//Opera browser was a PAIN to get this work work...
        var results = jLinq.from(data.users).greater("age", 60).orderBy("-admin","first").select();
        this.assert(results.length == 5, "Did not return the correct number of records.");
        this.assert((
            results[0].first == "Lilly"&&
            results[1].first == "Mary" && 
            results[2].first == "Abby" &&
            results[3].first == "Owen" &&
            results[4].first == "Zach"), "Did not return the records in the correct order.");
    }},
    
    {name:"True is returned with any() when at least one item matches",
    method:function() {
        this.assert(
            jLinq.from(data.users).contains("first","a").any(),
            "Did not return true when there should be at least one match"
            );
    }},
    
    {name:"False is returned with any() when nothing matches",
    method:function() {
        this.assert(
            !jLinq.from(data.users).contains("first", "$)(%$)(%*)$(*%)$(*)*$%$%").any(),
            "Did not return false when there should be no matches"
            );
    }},
    
    {name:"True returned with all() when everything evaluates to true",
    method:function() {
        this.assert(
            jLinq.from(data.users).greater("age",-1).all(),
            "Did not return true when everything was a match"
            );
    }},
    
    {name:"False returned with all() when only some items matched",
    method:function() {
        this.assert(
            !jLinq.from(data.users).greater("age",30).all(),
            "Did not return false when only some items matched"
            );
    }},
    
    {name:"Greater works for multiple types of parameters",
    method:function() {
        this.assert(
            jLinq.from(data.users).greater("first",5).count() == 9,
            "Did not return exactly 5 first name results for greater than 5 (number)"
            );
        
        this.assert(
            jLinq.from(data.users).greater("first", "Abcde").count() == 9,
            "Did not return exactly 5 first name results for greater than 5 (Characters 'Abcde')"
            );
            
        this.assert(
            jLinq.from(data.users).greater("first", [0,0,0,0,0]).count() == 9,
            "Did not return exactly 5 first name results for greater than 5 (Array)"
            );
            
        this.assert(
            jLinq.from(data.users).greater("age", 70).count() == 2,
            "Did not return exactly 2 age results for greater than 70 (Number)"
            );
    }},
    
    {name:"Less works for multiple types of parameters",
    method:function() {
        this.assert(
            jLinq.from(data.users).less("first", 4).count() == 2,
            "Did not return exactly 2 first name results for less than 4 (number)"
            );
        
        this.assert(
            jLinq.from(data.users).less("first", "Abcd").count() == 2,
            "Did not return exactly 2 first name results for less than 4 (Characters 'Abcd')"
            );
            
        this.assert(
            jLinq.from(data.users).less("first", [0,0,0,0]).count() == 2,
            "Did not return exactly 2 first name results for less than 4 (Array)"
            );
            
        this.assert(
            jLinq.from(data.users).less("age", 15).count() == 3,
            "Did not return exactly 3 age results for less than 15 (Number)"
            );
    }},

    {name:"GreaterEquals works for multiple types of parameters",
    method:function() {
        this.assert(
            jLinq.from(data.users).greaterEquals("first",7).count() == 3,
            "Did not return exactly 3 first name results for greater than or equals 7 (number)"
            );
        
        this.assert(
            jLinq.from(data.users).greaterEquals("first", "Abcdefg").count() == 3,
            "Did not return exactly 3 first name results for greater than or equals 3 (Characters 'Abcdefg')"
            );
            
        this.assert(
            jLinq.from(data.users).greaterEquals("first", [0,0,0,0,0,0,0]).count() == 3,
            "Did not return exactly 3 first name results for greater than or equals 3 (Array)"
            );
            
        this.assert(
            jLinq.from(data.users).greaterEquals("age", 67).count() == 3,
            "Did not return exactly 3 age results for greater than or equals 67 (Number)"
            );
    }},
    
    {name:"LessEquals works for multiple types of parameters",
    method:function() {
        this.assert(
            jLinq.from(data.users).lessEquals("first", 3).count() == 2,
            "Did not return exactly 2 first name results for ess than or equal to 3 (number)"
            );
        
        this.assert(
            jLinq.from(data.users).lessEquals("first", "Abc").count() == 2,
            "Did not return exactly 2 first name results for ess than or equal to 3 (Characters 'Abcd')"
            );
            
        this.assert(
            jLinq.from(data.users).lessEquals("first", [0,0,0]).count() == 2,
            "Did not return exactly 2 first name results for ess than or equal to 3 (Array)"
            );
            
        this.assert(
            jLinq.from(data.users).lessEquals("age", 16).count() == 4,
            "Did not return exactly 4 age results for less than or equal to 15 (Number)"
            );
    }},
	
	{name:"Sum works for multiple types of parameters",
    method:function() {
        this.assert(
            jLinq.from(data.users).less("age", 15).sum("age").result == 40,
            "Did not return exactly 40 sum from all ages less than 15, (14,14,12)"
            );
		this.assert(
            jLinq.from(data.users).startsWith("first", "a").sum("first").result == 24,
            "Did not return exactly 24 sum from all names starting with 'a'"
            );
		this.assert(
            jLinq.from(data.users).startsWith("first", "a").sum("permissions").result == 9,
            "Did not return exactly 9 results for sum from all names starting with 'a' and the sum of their permissions"
            );
    }},
	
	{name:"Average works for multiple types of parameters",
    method:function() {
        this.assert(
            jLinq.from(data.users).equals("age", 14).average("age").result == 14,
            "Did not return exactly 14 for the ages that are equal to 14"
            );
		this.assert(
            jLinq.from(data.users).startsWith("first", "a").average("first").result == 4.8,
            "Did not return 4.8 average from names starting with 'a'"
            );
		this.assert(
            jLinq.from(data.users).startsWith("first", "a").average("permissions").result == 1.8,
            "Did not return exactly 1.8 average from all names starting with 'a' and the sum of their permissions"
            );
    }},
	
	{name:"Except filters results correctly",
    method:function() {	
		var older = jLinq.from(data.users).greaterEquals("age", 40).select();
        this.assert(
			jLinq.from(data.users).startsWith("first", "a").except(older).count() == 2,
            "Except fails to remove items in the older array from the list."
            );
			
		//simple array
		var startsWithA = jLinq.from(data.fruits).startsWith("a").select();
		this.assert(
			jLinq.from(data.fruits).contains("e").except(startsWithA).count() == 5,
			"Except fails with a simple array"
			);
			
    }},
	
	{name:"Intersect filters results correctly",
    method:function() {	
	
		var older = jLinq.from(data.users).greaterEquals("age", 40).select();
        this.assert(
			jLinq.from(data.users).contains("permissions", "delete").intersect(older).count() == 2,
            "Interset fails to include only unmatched items into the array."
            );
			
		//simple array		
		var containsE = jLinq.from(data.fruits).contains("e").select();
		this.assert(
			jLinq.from(data.fruits).greaterEquals(10).intersect(containsE).count() == 2,
			"Intersect fails with a simple array" 
			);
			
    }},
	
	{name:"Union filters results correctly",
    method:function() {	
		var older = jLinq.from(data.users).greaterEquals("age", 70).select();
        this.assert(
			jLinq.from(data.users).startsWith("first", "a").union(older).count() == 6,
            "Union fails to all matching items into the array."
            );
			
		//simple array		
		this.assert(
			jLinq.from(data.fruits).startsWith("a").union(["tomato", "carrot"]).count() == 3,
			"Union fails with a simple array"
			);
			
    }},
	
	{name:"SkipWhile begins selection at correct moment",
    method:function() {	
        this.assert(
			jLinq.from(data.users).orderBy("age").skipWhile(function(d) { return d.age < 60 }).length == 5,
            "SkipWhile fails to start only at the correct point in the selection."
            );
			
		//simple array	
		this.assert(
			jLinq.from(data.fruits).orderBy().skipWhile(function(d) { return d.charAt(0) == "a"; }).length == 8,
            "SkipWhile fails to start only at the correct point in the selection of a simple array."
			);
			
    }},
	
	{name:"TakeWhile ends selection at correct moment",
    method:function() {	
        this.assert(
			jLinq.from(data.users).orderBy("admin").takeWhile(function(d) { return !d.admin; }).length == 21,
            "TakeWhile fails to end only at the correct point in the selection."
            );
			
		//simple array	
		this.assert(
			jLinq.from(data.fruits).orderBy().takeWhile(function(d) { return d.indexOf("a") > -1; }).length == 2,
            "TakeWhile fails to end at the correct point in the selection of a simple array."
			);
			
    }},
	
	{name:"Min selects correct minimum record",
    method:function() {	
        this.assert(
			jLinq.from(data.users).min("age") == 12,
            "Min does not return the correct numeric record."
            );
			
		this.assert(
			jLinq.from(data.users).min("first") == "Ava",
            "Min does not return the correct string record."
            );
			
		var p = jLinq.from(data.users).min("permissions");
		this.assert(
			(p[0] == "READ"),
            "Min does not return the correct array record."
            );			
			
		this.assert(
			jLinq.from(data.numbers).min() == 2,
            "Min does not return the correct numeric record from a simple array."
            );
			
		this.assert(
			jLinq.from(data.fruits).min() == "kiwi",
            "Min does not return the correct string record from a simple array."
            );
			
    }},
	
	{name:"Max selects correct minimum record",
    method:function() {	
        this.assert(
			jLinq.from(data.users).max("age") == 73,
            "Max does not return the correct numeric record."
            );
			
		this.assert(
			jLinq.from(data.users).max("first") == "Margret",
            "Max does not return the correct string record."
            );
			
		var p = jLinq.from(data.users).max("permissions");
		this.assert(
			(p[0] == "read" && p[1] == "write" && p[2] == "delete"),
            "Max does not return the correct array record."
            );
			
		this.assert(
			jLinq.from(data.numbers).max() == 123,
            "Max does not return the correct numeric record from a simple array."
            );
			
		this.assert(
			jLinq.from(data.fruits).max() == "strawberry",
            "Max does not return the correct string record from a simple array."
            );
			
    }},
	
	{name:"Equals works with '0' (Zero) numbers",
    method:function() {	
        this.assert(
			jLinq.from(data.grades).equals("score", 0).select().length == 2,
            "Equals '0' (Zero) failed to find correct number of records."
            );
			
    }},
	
	{name:"Equals works with strings numbers",
    method:function() {	
        this.assert(
			jLinq.from(data.fruits).equals("STRAWBERRY").select().length == 1,
            "Case insensitive equals failed to find the correct number of records."
            );
			
		this.assert(
			jLinq.from(data.fruits).useCase().equals("STRAWBERRY").select().length == 0,
            "Case insensitive equals failed to find 0 records with case sensitivity turned on."
            );
			
		this.assert(
			jLinq.from(data.users).equals("ABBY").select().length == 0,
            "Case insensitive equals failed to find 0 on object records when ignoring case."
            );
		
		this.assert(
			jLinq.from(data.users).useCase().equals("ABBY").select().length == 0,
            "Case insensitive equals failed to find 0 on object records with case sensitivity turned on."
            );
    }},
	
	{name:"OrderBy works with nested properties",
    method:function() {	
	
		//check the normal direction
		var records = jLinq.from(data.users)
			.join(data.locations, "location", "locationId", "id")
			.startsWith("first", "a")
			.orderBy("location.city")
			.select(function(rec) {
				return {
					first:rec.first,
					city: rec.location.city
				}
			});
			
        this.assert(
			records.length == 5 &&
			records[0].city == "Houston" &&
			records[1].city == "Orlando" &&
			records[2].city == "Orlando" &&
			records[3].city == "Raliegh" &&
			records[4].city == "Raliegh",
            "Nested property sorted correcty in ascending order."
            );
			
		//reverse and check again
		records = jLinq.from(records).reverse().select();
		
		this.assert(
			records.length == 5 &&
			records[0].city == "Raliegh" &&
			records[1].city == "Raliegh" &&
			records[2].city == "Orlando" &&
			records[3].city == "Orlando" &&
			records[4].city == "Houston",
            "Nested property sorted correcty in ascending order."
            );
			
	}},
	
	{name:"Has (bitwise) matches correctly for values",
    method:function() {	
        this.assert(
			jLinq.from(data.people).has("permission", permission.remove).select().length == 4,
            "Case insensitive equals failed to find the correct number of records."
            );
			
	}},
	
	{name:"Repeat previous action by remembering command name",
    method:function() {	
		this.assert(
			jLinq.from(data.users).startsWith("first", "a").or().startsWith("first", "b").count() == 6,
            "Fully typed query returned incorrect results."
            );
			
		this.assert(
			jLinq.from(data.users).startsWith("first", "a").or().startsWith("b").count() == 6,
            "Memorized field name query returned incorrect results."
            );
			
		this.assert(
			jLinq.from(data.users).startsWith("first", "a").or("first", "b").count() == 6,
            "Memorized command query returned incorrect results."
            );
			
		this.assert(
			jLinq.from(data.users).startsWith("first", "a").or("b").count() == 6,
            "Memorized command and field name query returned incorrect results."
            );
			
    }}

])}, 250);