$(function(){
  $(document).foundation({
    reveal : {
        animation: 'fade',
        animation_speed: 250
    }
  });
  if(sectionName == 'archives'){
    archivePage.init();
  }
});
