var WARTICLES_PER_PAGE = 5;

// <!-- *** Get query parameters -->
let { c_id, q, s, o, u, o_id } = get_query_parameters();
var _articles_displayed = 0;
var _articles_reviewed = 0;
var i;

if (o_id == null) {
    window.location.replace("index.html");
}
_article=get_article_by_id(o_id);

change_site_title(_article['name']+' - criptochollos.com');

change_breadcrumb(get_category_name_by_id(_article['category_id']),_article['category_id'], _article['name']);

update_offer(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price'], _article['url'], _article['user'], _article['description'],_article['ref'], get_category_name_by_id(_article['category_id']))

for (let _category of _categories) {
    // <!-- *** 004 - Categorias -->
    add_ul_category_004(_category['id'], _category['name'], _category['url']);
}

_warticles = filter_and_order_articles(_articles, c_id, q, 1, 'score');
// TODO: ordenar por score
for (i = 0; i < WARTICLES_PER_PAGE; i++) {
    // <!-- *** 002 - Chollos widget -->
    add_widget_card(_warticles[i]['id'], _warticles[i]['name'], _warticles[i]['category_id'], _warticles[i]['status'], _warticles[i]['image'], _warticles[i]['price'], _warticles[i]['url']);
}
