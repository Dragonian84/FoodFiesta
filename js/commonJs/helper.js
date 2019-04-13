$(document).ready(function(){

  function callPage(url,data,divId,preloader){
    if(preloader==1){
    }
    $.ajax({
      type:'POST',
      data:data,
      url: url,
      success:function(data)
              {
                alert("hellosucc");
                $('#'+divId).load(data);
              },
      error:function(data){
        alert("telp");
      }
    }).fail(function(){
        alert("hello");
    }).done(function(){
      alert("bye");
    });
  }

});
