// <!-- *** Get query parameters -->
let { c_id, q, page } = get_query_parameters();

var _article_quantity=0

for (let _category of _categories) {
    // <!-- *** 001 - Categorias -->
    add_nav_category_001(_category['id'], _category['name'], _category['url']);
    // <!-- *** 002 - Categorias -->
    add_select_category_002(_category['id'], _category['name'], _category['url']);
    // <!-- *** 003 - Categorias -->
    add_ul_category_003(_category['id'], _category['name'], _category['url']);
    // <!-- *** 004 - Categorias -->
    add_ul_category_004(_category['id'], _category['name'], _category['url']);
}

for (let _article of _articles) {

    if (c_id == null || c_id == _article['category_id']) {
        // <!-- *** 001 - Chollos -->
        add_article_card(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price']);
        _article_quantity=_article_quantity+1;
    }

    // <!-- *** 002 - Chollos widget -->
    add_widget_card(_article['id'], _article['name'], _article['category_id'], _article['status'], _article['image'], _article['price'])
}


update_article_displayed(12, article_quantity);