// <!-- *** Get query parameters -->
let { c_id, q, s, o, u, o_id } = get_query_parameters();
var _articles_displayed = 0;
var _articles_reviewed = 0;
var i;

for (let _category of _categories) {
    // <!-- *** 005 - Categorias -->
    add_div_category_005(_category['id'], _category['name'], _category['url']);
}