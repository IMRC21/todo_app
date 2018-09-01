//js file
ons.ready(function(){
    ons.disableAutoStyling();
});

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
            this.elements.push(this.temp_v);
			this.temp_v = "";
           },
           removeItem(index){
            completedInstance.completed.push(this.elements[index]);
            this.elements.splice(index, 1);
           }

       }
    });
    
    var completedInstance = new Vue({
        el: "#completedTasks",
        data:{
            completed:[

            ]
        }


    });
}
