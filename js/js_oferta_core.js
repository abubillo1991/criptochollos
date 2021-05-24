var ARTICLES_PER_PAGE = 5;
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

change_breadcrumb(_article['category_id'], get_category_name_by_id(_article['category_id']), _article['name']);

//update_offer(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price'], _article['url'], _article['user'])


/*
update_search_filters(o,s);

for (let _category of _categories) {
    // <!-- *** 001 - Categorias -->
    add_nav_category_001(_category['id'], _category['name'], _category['url']);
    // <!-- *** 002 - Categorias -->
    add_select_category_002(_category['id'], _category['name'], _category['url']);
    // <!-- *** 003 - Categorias -->
    add_ul_category_003(_category['id'], _category['name'], _category['url']);
    // <!-- *** 004 - Categorias -->
    add_ul_category_004(_category['id'], _category['name'], _category['url']);
    // <!-- *** 005 - Categorias -->
    add_div_category_005(_category['id'], _category['name'], _category['url']);
}

_warticles = filter_and_order_articles(_articles, c_id, q, 1, 'score');
// TODO: ordenar por score
for (i = 0; i < WARTICLES_PER_PAGE; i++) {
    // <!-- *** 002 - Chollos widget -->
    add_widget_card(_warticles[i]['id'], _warticles[i]['name'], _warticles[i]['category_id'], _warticles[i]['status'], _warticles[i]['image'], _warticles[i]['price'], _warticles[i]['url']);
}

// 1. Filtrar por categoria o por query o por disponible
// 2. Ordenar por fecha o por relevancia
// 3. Mostrar
_articles = filter_and_order_articles(_articles, c_id, q, s, o);
var _articles_length = _articles.length;

while (_articles_displayed < ARTICLES_PER_PAGE) {
    _article = _articles[_articles_reviewed];

    // <!-- *** 001 - Chollos -->
    add_article_card(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price'], _article['url'], _article['user']);
    _articles_displayed += 1;

    _articles_reviewed += 1;
}


window.onscroll = function () {
    var scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    _articles_displayed = 0;

    if (totalHeight >= scrollHeight) {
        console.log('bottom')
        while (_articles_displayed < ARTICLES_PER_PAGE && _articles_length > _articles_reviewed) {
            console.log(_articles_length + '/' + _articles_reviewed);
            _article = _articles[_articles_reviewed];

            // <!-- *** 001 - Chollos -->
            add_article_card(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price']);
            _articles_displayed += 1;

            _articles_reviewed += 1;
        }
    }
}
*/