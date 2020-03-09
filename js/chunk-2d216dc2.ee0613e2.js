(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216dc2"],{c3ea:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Level",e._b({},"Level",e.properties,!1))},r=[],i=n("28fe"),s=n("61b2"),o=n.n(s),l="C-04",u="Arrays",h=["Fundamentals"],b=2,d='<p>\nArray is a data type that can store multiple values in a single variable. Think of it like a list. An example of an array would be:\n</p>\n<p>\n<kbd>var fruits = ["Apple", "Orange", "Grape"]</kbd>\n</p>\n<p>\nTo access an element (value) from an array, we have to call it by it\'s <b>index number</b>. \nThis is the position of the element in the array. The index number of an array <b>always starts with 0</b>. \nUsing the same array example above, we can get the value <kbd>Grape</kbd> by doing the following: \n</p>\n<p>\n<kbd>var x = fruits[2]</kbd>\n</p>\n<p>\nThe variable <kbd>x</kbd> in here would equate to <kbd>Grape</kbd>, \nsince we are calling the element in the array with the index number of <b>2</b>, \nwhich corresponds to <b>the third element of the array</b> (because arrays count from zero, as stated above). \nCalling elements from an array can also be done not just with numbers, we can also use variables. \n</p>\n<p>\n<kbd>var fibonacci = [1, 1, 2, 3, 5] \n var i = fibonacci.length - 1\n var last = fibonacci[i]</kbd>\n</p>\n<p>\nThe variable <kbd>last</kbd> here equates to <kbd>5</kbd>, which is the last element in the array <kbd>fibonacci</kbd>. \nYou might notice something new here, and it is the <kbd>length</kbd> property. \nEvery array (and even strings) have this property. It tells us the total number of elements \n(or characters, if it\'s a string) within the array. \nIf we want to get the index number of the last element of the array, we can use the said array\'s length value, and deduct 1 from it. \nWe do this since arrays count from zero. \nIn the example above, we set the variable <kbd>i</kbd> as an index number for the last element of the array. \nWe can then use <kbd>i</kbd> to extract the last element of the <kbd>fibonacci</kbd> array, \nwhich is the value we assigned to the variable <kbd>last</kbd>.\n</p>\n<p>\nYour task now is to create a function that gets the first and last element of a given array. Return both these values as an array.\n</p>',p="<p>\nThe input function <kbd>firstAndLast()</kbd> only has 1 argument: <kbd>array</kbd>. \nThis argument is an array type that can contain any amount of elements.\n</p>\n<p>\nExample Input: <kbd>firstAndLast([1, 2, 3, 4])</kbd>\n</p>",c="<p>\nThe output of the function must be an array, with two elements being the first and last elements of the input array, respectively.\n</p>\n<p>\nExample Output: <kbd>[1,4]</kbd>\n</p>",f="<p>\nIf you are having difficulty with returning the proper output, remember that it <b>has to be an array</b>, \ncontaining the first and last element of the input array. \nIf you've set up those two as variables, you can simply do <kbd>return [first, last]</kbd>.\n</p>",m="function firstAndLast(array) {\n  // Your code here\n}",y="firstAndLast([1, 2, 3, 4])",k=[null,null],v="firstAndLast",w=function(e){return[e[0],e[e.length-1]]},g=function(e,t){return e[0]==t[0]&&e[1]==t[1]},x={components:{Level:i["a"]},data:function(){return{properties:{name:l,title:u,tags:h,difficulty:b,description:d,inputFormat:p,outputFormat:c,hint:f,defaultCode:m,defaultInput:y,testInputs:k,inputFunction:v,solution:w,validator:g}}},mounted:function(){this.properties.testInputs[0]=[[o.a.int(-100,100)]],this.properties.testInputs[1]=[[]];for(var e=o.a.int(3,10),t=0;t<e;t++)this.properties.testInputs[1][0][t]=o.a.int(-100,100)}},I=x,A=n("2877"),T=Object(A["a"])(I,a,r,!1,null,null,null);t["default"]=T.exports}}]);
//# sourceMappingURL=chunk-2d216dc2.ee0613e2.js.map