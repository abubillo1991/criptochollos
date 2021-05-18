var ARTICLES_PER_PAGE = 5
var WARTICLES_PER_PAGE = 5

// <!-- *** Get query parameters -->
let { c_id, q, s, o } = get_query_parameters();
var _warticle_iterator = 1
var _articles_displayed = 0
var _articles_reviewed = 0


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

// 1. Filtrar por categoria o por query o por disponible
// 2. Ordenar por fecha o por relevancia
_articles = filter_and_order_articles(_articles, c_id, q, s, o)

var _articles_length = _articles.length
// 3. Mostrar

while(_articles_displayed < ARTICLES_PER_PAGE){
    _article=_articles[_articles_reviewed]
    
    if (_warticle_iterator <= WARTICLES_PER_PAGE) {
        // <!-- *** 002 - Chollos widget -->
        add_widget_card(_article['id'], _article['name'], _article['category_id'], _article['status'], _article['image'], _article['price']);
        _warticle_iterator += 1;
    }

    if (c_id == null || c_id == _article['category_id']) {
        // <!-- *** 001 - Chollos -->
        add_article_card(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price']);
        _articles_displayed += 1;
    }
    _articles_reviewed += 1;
}


window.onscroll = function () {
    var scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    _articles_displayed = 0;

    if (totalHeight >= scrollHeight) {
        console.log('bottom')
        while(_articles_displayed < ARTICLES_PER_PAGE && _articles_length > _articles_reviewed){
            console.log(_articles_length + '/' + _articles_reviewed);
            _article=_articles[_articles_reviewed];
            if (c_id == null || c_id == _article['category_id']) {
                // <!-- *** 001 - Chollos -->
                add_article_card(_article['id'], _article['name'], _article['category_id'], _article['intro_description'], _article['date'], _article['score'], _article['status'], _article['image'], _article['price']);
                _articles_displayed += 1;
            }
            _articles_reviewed += 1;
        }
    }
}
