var ARTICLES_PER_PAGE = 20
var WARTICLES_PER_PAGE = 10

// <!-- *** Get query parameters -->
let { c_id, q } = get_query_parameters();
var _article_iterator = 1
var _warticle_iterator = 1
var _article_block_added = 1
var _last_article_id = 0

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

    if (_warticle_iterator <= WARTICLES_PER_PAGE) {
        // <!-- *** 002 - Chollos widget -->
        add_widget_card(_article['id'], _article['name'], _article['category_id'], _article['status'], _article['image'], _article['price'])
        _warticle_iterator += 1
    }

    if (_article_iterator <= ARTICLES_PER_PAGE) {
        if (c_id == null || c_id == _article['category_id']) {
            // <!-- *** 001 - Chollos -->
            add_article_card(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price']);
            _article_iterator += 1
        }
    }
}

update_search_information(c_id, q, ARTICLES_PER_PAGE);

window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        alert("you're at the bottom of the page");
    }
};