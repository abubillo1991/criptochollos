

for (let _category of _categories) {
    // <!-- *** 001 - Categorias -->
    add_nav_category_001(_category['id'],_category['name'],_category['url']);
    // <!-- *** 002 - Categorias -->
    add_select_category_002(_category['id'],_category['name'],_category['url']);
    // <!-- *** 003 - Categorias -->
    add_ul_category_003(_category['id'],_category['name'],_category['url']);
}