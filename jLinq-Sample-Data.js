/*
 * jLinq Sample Data
 * ---------------------------------
 * Hugo Bonacci (webdev_hb@yahoo.com)
 * www.hugoware.net
 * License: Attribution-Share Alike
 * http://creativecommons.org/licenses/by-sa/3.0/us/
 */
 
var permission = {
	none: 0x0,
	read: 0x1,
	write: 0x2,
	remove: 0x4
};
 
var data = {

    // a list of user profiles
    users:[
		{ first: "John", last: "Smith", age: 45, admin: false, locationId:2, gender: "m", lastLogin: new Date("1/3/2007 1:05 PM"), permissions: ["read"] },
		{ first: "Margret", last: "Lynn", age: 32, admin: true, locationId:1, gender: "f", lastLogin: new Date("12/11/2006 3:25 PM"), permissions: ["read", "write"] },
		{ first: "Ryan", last: "Aston", age: 22, admin: false, locationId:3, gender: "M", lastLogin: new Date("3/7/2008 1:31 AM"), permissions: ["read", "write"] },
		{ first: "Zoe", last: "Brown", age: 21, admin: true, locationId:2, gender: "f", lastLogin: new Date("6/5/2008 2:02 PM"), permissions: ["read"] },
		{ first: "Haley", last: "Baker", age: 14, admin: true, locationId:3, gender: "f", lastLogin: new Date("9/28/2007 1:01 AM"), permissions: ["read", "write", "delete"] },
		{ first: "Chase", last: "Herbert", age: 17, admin: false, locationId:7, gender: "m", lastLogin: new Date("6/22/2008 3:12 PM"), permissions: ["read"] },
		{ first: "Mary", last: "Godard", age: 65, admin: true, locationId:2, gender: "f", lastLogin: new Date("7/9/2008 1:52 AM"), permissions: ["read"] },
		{ first: "Oliva", last: "Sellick", age: 44, admin: true, locationId:6, gender: "f", lastLogin: new Date("3/5/2006 1:55 PM"), permissions: ["read"] },
		{ first: "Justin", last: "Stanwood", age: 21, admin: true, locationId:5, gender: "M", lastLogin: new Date("12/18/2008 7:31 AM"), permissions: ["READ"] },
		{ first: "Adam", last: "Smith", age: 45, admin: false, locationId:5, gender: "m", lastLogin: new Date("5/14/2008 8:28 AM"), permissions: ["read"] },
		{ first: "Audrey", last: "Worth", age: 32, admin: false, locationId:2, gender: "f", lastLogin: new Date("2/23/2008 1:24 PM"), permissions: ["read"] },
		{ first: "Owen", last: "Walter", age: 61, admin: false, locationId:1, gender: "m", lastLogin: new Date("3/14/2007 9:23 AM"), permissions: ["read"] },
		{ first: "Seth", last: "Morgan", age: 45, admin: false, locationId:2, gender: "m", lastLogin: new Date("7/2/2008 11:52 PM"), permissions: ["read", "write"] },
		{ first: "Carter", last: "Fry", age: 38, admin: false, locationId:3, gender: "m", lastLogin: new Date("2/7/2008 1:34 AM"), permissions: ["read", "write"] },
		{ first: "Justin", last: "Cromwell", age: 25, admin: true, locationId:4, gender: "M", lastLogin: new Date("1/17/2006 1:33 PM"), permissions: ["read"] },
		{ first: "Brian", last: "Martin", age: 32, admin: false, locationId:7, gender: "m", lastLogin: new Date("7/11/2005 1:32 AM"), permissions: ["read"] },
		{ first: "Ava", last: "Barton", age: 14, admin: false, locationId:7, gender: "f", lastLogin: new Date("9/6/2008 12:41 PM"), permissions: ["READ", "WRITE", "delete"] },
		{ first: "David", last: "Baum", age: 18, admin: false, locationId:2, gender: "m", lastLogin: new Date("11/3/2008 3:54 AM"), permissions: ["read"] },
		{ first: "Daniel", last: "Ashford", age: 56, admin: false, locationId:2, gender: "m", lastLogin: new Date("10/12/2008 2:23 AM"), permissions: ["read", "write", "delete"] },
		{ first: "Lilly", last: "Edwin", age: 73, admin: true, locationId:3, gender: "f", lastLogin: new Date("4/22/2007 1:41 AM"), permissions: ["read", "write"] },
		{ first: "Logan", last: "Lee", age: 23, admin: false, locationId:4, gender: "m", lastLogin: new Date("7/25/2006 7:43 PM"), permissions: ["read", "write"] },
		{ first: "James", last: "Haff", age: 24, admin: false, locationId:4, gender: "m", lastLogin: new Date("8/21/2008 8:21 AM"), permissions: ["read"] },
		{ first: "Zach", last: "Lane", age: 67, admin: false, locationId:1, gender: "m", lastLogin: new Date("3/11/2007 1:45 PM"), permissions: ["read"] },
		{ first: "Abby", last: "Bartin", age: 73, admin: false, locationId:7, gender: "F", lastLogin: new Date("5/12/2008 6:45 AM"), permissions: ["read"] },
		{ first: "Paige", last: "Darrow", age: 38, admin: true, locationId:6, gender: "f", lastLogin: new Date("9/17/2006 11:21 PM"), permissions: ["read"] },
		{ first: "Matt", last: "Raymond", age: 12, admin: false, locationId:7, gender: "m", lastLogin: new Date("11/14/2008 4:33 AM"), permissions: ["read", "write"] },
		{ first: "Daniel", last: "Oswald", age: 29, admin: true, locationId:4, gender: "m", lastLogin: new Date("4/4/2007 8:55 PM"), permissions: ["READ", "WRITE"] },
		{ first: "Abigail", last: "Weller", age: 40, admin: false, locationId:5, gender: "f", lastLogin: new Date("10/12/2008 2:12 AM"), permissions: ["READ", "WRITE", "DELETE"] },
		{ first: "Madison", last: "Smith", age: 21, admin: false, locationId:3, gender: "F", lastLogin: new Date("1/22/2005 9:34 AM"), permissions: ["read"] },
		{ first: "Emma", last: "Yager", age: 20, admin: true, locationId:1, gender: "f", lastLogin: new Date("10/4/2008 1:21 PM"), permissions: ["read", "write"] },
		{ first: "Luke", last: "Heaton", age: 16, admin: false, locationId:2, gender: "m", lastLogin: new Date("3/2/2008 10:56 PM"), permissions: ["read"] },
		{ first: "Chris", last: "Everard", age: 34, admin: false, locationId:4, gender: "m", lastLogin: new Date("6/23/2006 12:32 PM"), permissions: ["read"] }
		],
		
	//locations that can be linked to users
	locations:[
		{ id: 1, city:"Abilene", state:"Texas" },
		{ id: 2, city:"Houston", state:"Texas" },
		{ id: 3, city:"Syracuse", state:"New York" },
		{ id: 4, city:"San Bernadino", state:"California" },
		{ id: 5, city:"Orlando", state:"Flordia" },
		{ id: 6, city:"Salt Lake City", state:"Utah" },
		{ id: 7, city:"Raliegh", state:"North Carolina" }
		],

	//array of strings for sample data
	fruits:[ "apple", "orange", "bannana", "grape", "cherry", "grapefruit", "kiwi", "strawberry", "mango" ],
	
	//list of numbers
	numbers:[ 2, 99, 123, 4, 35, 55, 21, 95, 45, 99, 48, 3, 23, 75 ],
	
	people:[
		{ name:"Mark", permission:(permission.read | permission.write | permission.remove), permissionAsNumber:7 },
		{ name:"James", permission:(permission.read), permissionAsNumber:1 },
		{ name:"Susan", permission:(permission.read | permission.write | permission.remove), permissionAsNumber:7 },
		{ name:"Brian", permission:(permission.read | permission.write | permission.remove), permissionAsNumber:7 },
		{ name:"Edward", permission:(permission.read | permission.write), permissionAsNumber:3 },
		{ name:"Steve", permission:(permission.read | permission.write | permission.remove), permissionAsNumber:7 }
	],
	
	grades:[
		{ user : "Joe", score : 0 },
		{ user : "Steve", score : 99 },
		{ user : "Mary", score : 85 },
		{ user : "Mark", score : 87 },
		{ user : "Brian", score : 0 }
	]
	
};
