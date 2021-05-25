// <!-- *** Get query parameters -->
let { c_id, q, s, o, u, o_id } = get_query_parameters();
var _articles_displayed = 0;
var _articles_reviewed = 0;
var i;

for (let _category of _categories) {
    // <!-- *** 005 - Categorias -->
    add_div_category_005(_category['id'], _category['name'], _category['url']);
}

function contact_form() {
    c_message='n: '+document.getElementById("form-name").value + ', e: '+document.getElementById("form-email").value + ', s: '+document.getElementById("form-subject").value + ', m: '+document.getElementById("form-message").value;
    r_contact=fetch_contact(c_message)
    console.log('contact_form: '+r_contact)
    /*if (o_id == null) {
        window.location.replace("index.html");
    }*/
  }