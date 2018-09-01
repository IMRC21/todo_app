//js file


var counter = 0;
var value_of_input;
var part1 = "<ons-list-item tappable id='";
var part2 = "'><label class='left'><ons-checkbox input-id='check-";
var part3 = "'></ons-checkbox></label>";
var part4 = "</ons-list-item tappable>";
var all;
var justTest;

var part1 = "<ons-list-item tappable><label class='left'><ons-checkbox :change='removeItem' input-id='check-";
var part2 = "'></ons-checkbox></label> <label for='check-";
var part3 = "' class='center'><slot></slot></label></ons-list-item>"

window.onload = function () {
    
    var toCompleteInstance = new Vue({
        el: "#root",
        data: {
            temp_v: "",
            elements:[
            ],
            completed:[
                
            ]
            //myIndex = index
       },
       methods: {
           addElement(){
            counter++;
            console.log(counter);
            this.elements.push(this.temp_v);
			this.temp_v = "";
           },
           removeItem(index){
            completedInstance.completed.push(this.elements[index]);
            this.elements.splice(index, 1);
           }

       }
    });

    Vue.component("myTodo",{
        // data: function(){
        //     return
        //      {
        //      }
        // },
        template: part1 + counter + part2 + counter + part3 
        });
    
    var completedInstance = new Vue({
        el: "#completedTasks",
        data:{
            completed:[

            ]
        }


    });
}
