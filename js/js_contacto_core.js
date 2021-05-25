// <!-- *** Get query parameters -->
let { c_id, q, s, o, u, o_id, sent } = get_query_parameters();
var _articles_displayed = 0;
var _articles_reviewed = 0;
var i;

for (let _category of _categories) {
    // <!-- *** 005 - Categorias -->
    add_div_category_005(_category['id'], _category['name'], _category['url']);
}
if (sent==1){
    document.getElementById("contact-alert").innerHTML += '<div class="alert alert-success alert-lg mb-3 alert-dismissible fade show"><i class="fas fa-check"></i> El mensaje ha sido enviado con éxito. <button type="button" class="close" data-dismiss="alert" aria-label="Close"><svg width="12px" height="12px"><use xlink:href="images/sprite.svg#cross-12"></use></svg></button></div>'
}

function contact_form(site) {
    if (site == 'publicar-chollo'){
        alert("Hello! I am an alert box!!");
        c_message='n: '+document.getElementById("form-name").value+',r: '+document.getElementById("form-ref").value+',c: '+document.getElementById("form-code").value+',u: '+document.getElementById("form-user").value+',c_id: '+document.getElementById("form-category_id").value+',d: '+document.getElementById("form-description").value;
    }else{
        c_message='n: '+document.getElementById("form-name").value + ', e: '+document.getElementById("form-email").value + ', s: '+document.getElementById("form-subject").value + ', m: '+document.getElementById("form-message").value;
    }
    console.log(c_message)
    fetch_contact(c_message);

    sleep(50000);
    window.location.replace("?sent=1");
  }

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }