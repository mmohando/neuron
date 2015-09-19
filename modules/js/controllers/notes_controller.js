neuronModule.controller('NotesController', ['$scope', 'neuronFactory', function (scope, neuronFactory){
  scope.searchText = '';
  scope.notesList = neuronFactory.readNotes();
  temp = null;
  scope.selectedNotes = '';
  scope.refineSwitch = false;
  scope.newInfo = null;
  scope.delInitiate = null;
    
  scope.onNotesSelect = function(value){
      scope.selectedNotes = value + '   ' + scope.searchText;
  };
    
  scope.onNew = function(value){
      if (scope.newInfo == null){
          scope.selectedNotes = '';
          scope.newInfo = {};
      }
      else
        scope.newInfo = null;
  };
    
  scope.onSave = function(value){
      if (scope.newInfo != null && scope.selectedNotes != ''){
          scope.newInfo.info = scope.selectedNotes;
          scope.notesList.splice(0, 0, scope.newInfo);
          scope.newInfo = null;
      }
  };
  
  scope.onDelete = function(value){
      if (scope.delInitiate == null){
          temp = scope.notesList;
          scope.delInitiate = 'not null';
      }
      else{
        scope.delInitiate = null;
        scope.notesList = [];
        scope.notesList = temp;
      }
  };
       
}])