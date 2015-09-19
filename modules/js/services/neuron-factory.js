neuronModule.factory('neuronFactory', function ($http) {
    return {
        readNotes: function(){
            return [
                {info:'jesus', title:'god', marked:false},
                {info:'mani fsdsdfsdfdsfdsfdsf dfdsfdsfdsfd dffsdfdsfdsf dsfdsfsdfdsfdsf sdfdsfdsfdsfds fdsfdsfdsfsdfds fsdfdsfdsf', title:'believer', marked:false},
                {info:'susan', title:'believer', marked:false}
            ];
        }
    }  
});