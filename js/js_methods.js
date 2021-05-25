function change_site_title(title){
  document.title = title;
}

function get_query_parameters() {
  // TODO: asegurar que los query parameters son validos, no hay demas, son numeros...
  var url_string = window.location.href
  var url = new URL(url_string);
  var q = url.searchParams.get("q");
  var c_id = url.searchParams.get("c_id");
  var s = url.searchParams.get("s");
  var o = url.searchParams.get("o");
  var u = url.searchParams.get("u");
  var o_id = url.searchParams.get("o_id");

  return { c_id, q, s, o, u, o_id };
}

function filter_and_order_articles(_articles, c_id, q, s, o) {
  if (c_id != null) {
    _articles = _articles.filter(({ category_id }) => category_id == c_id);
  }

  if (s != null) {
    _articles = _articles.filter(({ status }) => status == s);
  }

  if (q != null) {
    _articles = _articles.filter(({ description }) => description.includes(q) == true);
  }

  if (o != null) {
    if (o == 'date') {
      _articles = _articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (o == 'score') {
      _articles = _articles.sort((a, b) => b.score - a.score);
    }

  }
  return _articles
}

function add_nav_category_001(id, name, url) {
  document.getElementById("nav_categories_001").innerHTML += '<li class="nav-links__item "><a class="nav-links__item-link" href="index.html?c_id=' + id + '"><div class="nav-links__item-body">' + name + '</div></a></li>';
}

function add_select_category_002(id, name, url) {
  document.getElementById("select_categories_002").innerHTML += '<option value="' + id + '">' + name + '</option>';
}

function add_ul_category_003(id, name, url) {
  document.getElementById("ul_categories_003").innerHTML += '<li class="departments__item"><a class="departments__item-link" href="index.html?c_id=' + id + '">' + name + '</a></li>';
}

function add_ul_category_004(id, name, url) {
  document.getElementById("ul_categories_004").innerHTML += '<li class="filter-categories__item filter-categories__item--child"><a href="index.html?c_id=' + id + '">' + name + '</a><div class="filter-categories__counter">-</div></li>';
}

function add_div_category_005(id, name, url) {
  document.getElementById("div_categories_005").innerHTML += '<li class="mobile-links__item" data-collapse-item><div class="mobile-links__item-title"><a href="index.html?c_id=' + id + '" class="mobile-links__item-link">'+name+'</a></div></li>';
}

function add_article_card(id, name, category_id, intro_description, date, score, status, image, price, url, user, ref) {
  console.log(date+"/"+new Date(date))
  _article_card = '<div class="products-list__item"><div class="product-card product-card--hidden-actions ">';

  if (score > 4.5) { _article_card += '<div class="product-card__badges-list"><div class="product-card__badge product-card__badge--sale">HOT</div></div>'; }
  else if (((new Date) - new Date(date)) <  (60 * 60 * 1000 * 24 * 7)){ _article_card += '<div class="product-card__badges-list"><div class="product-card__badge product-card__badge--new">NUEVO</div></div>'; }

  _article_card += '<div class="product-card__image product-image"><a href="oferta.html?o_id=' + id + '&u=' + url + '" class="product-image__body"><img class="product-image__img" src="' + image + '" alt=""></a></div><div class="product-card__info"><div class="product-card__name"><a href="oferta.html?o_id=' + id + '&u=' + url + '">' + name + '</a></div><div class="product-card__rating"><div class="product-card__rating-stars"><div class="rating"><div class="rating__body">';
  for (i = 1; i <= 5; i++) {
    if (i <= score) { _article_card += '<svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div>'; }
    else { _article_card += '<svg class="rating__star " width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge "><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div>'; }
  }
  _article_card += '</div></div></div><div class="product-card__rating-legend">' + score + '</div></div><p class="product-card__features-list">' + intro_description + '</p></div><div class="product-card__actions"><div class="product-card__availability">Estado: ';
  if (status == 1) { _article_card += '<span class="text-success">Disponible'; } else { _article_card += '<span class="text-danger">Agotado'; }
  _article_card += '</span></div><div class="product-card__prices">' + price + '</div>  <div class="product-card__buttons"><a class="btn btn-success product-card__addtocart product-card__addtocart--list" type="button" target="_blank" href="' + ref + '">Ir al chollo</a></div>';
  
  _article_card += '<div class="product-card__user">Usuario: <span class="text-dark">' + user + '</span></div></div></div></div>';
  document.getElementById("_article_card_list").innerHTML += _article_card
}

function add_widget_card(id, name, category_id, status, image, price, url) {
  _article_card = '<div class="widget-products__item"><div class="widget-products__image"><div class="product-image"><a href="oferta.html?o_id=' + id + '&u=' + url + '" class="product-image__body"><img class="product-image__img" src="' + image + '" alt=""></a></div></div><div class="widget-products__info"><div class="widget-products__name"><a href="oferta.html?o_id=' + id + '&u=' + url + '">';
  if (name.length > 50) {_article_card += name.substring(0, 50) + '...';}
  else {_article_card += name; }
  _article_card += '</a></div><div class="widget-products__prices">' + price + '</div></div></div>';
  document.getElementById("_widget_card_list").innerHTML += _article_card;
}


function update_search_filters(o,s){
  s_options='<option selected value="1">Disponible</option><option value="0">Agotado</option>';
  if(s != null && s==0){
    s_options='<option selected value="0">Agotado</option><option value="1">Disponible</option>';
  }
  document.getElementById("s").innerHTML += s_options;

  o_options='<option selected value="date">Fecha de publicación</option><option value="score">Relevancia</option>';
  if(o != null && o=='score'){
    s_options='<option value="date">Fecha de publicación</option><option selected value="score">Relevancia</option>';
  }
  document.getElementById("o").innerHTML += o_options;
}

function get_article_by_id(id){
  return _articles[id];
}

function change_breadcrumb(c_name, c_id, o_name){
  document.getElementById("breadcrumb-current-offer").innerHTML += '<li class="breadcrumb-item"><a href="index.html?c_id='+c_id+'">'+c_name+'</a> <svg class="breadcrumb-arrow" width="6px" height="9px"><use xlink:href="images/sprite.svg#arrow-rounded-right-6x9"></use></svg></li> <li class="breadcrumb-item active" aria-current="page">'+o_name+'</li>';
}

function get_category_name_by_id(o_id){
  return _categories[o_id]['name'];
}

function update_offer(o_id,o_name,c_id,o_intro_description,o_date,o_score,o_status,o_image,o_price,o_url,o_user, o_description, o_ref, c_name){
  document.getElementById("offer-image").innerHTML += '<a href="'+o_image+'" data-width="700" data-height="700" class="product-image__body" target="_blank"><img class="product-image__img" src="'+o_image+'" alt=""></a>';
  document.getElementById("offer-description").innerHTML += o_description;

  _offer_info ='<h1 class="product__name">'+o_name+'</h1><div class="product__rating"><div class="product__rating-stars"><div class="rating"><div class="rating__body">'
  for (i = 1; i <= 5; i++) {
    if (i <= o_score) { _offer_info += '<svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div>'; }
    else { _offer_info += '<svg class="rating__star " width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge "><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div>'; }
  }
  _offer_info +='</div></div></div><div class="product__rating-legend"><a>'+o_score+'</a><span></div></div><div class="product__description">'+o_intro_description+'</div><ul class="product__meta"><li class="product__meta-availability">Estado: ';
  if (o_status == 1) { _offer_info += '<span class="text-success">Disponible</span></li>'; } else { _offer_info += '<span class="text-danger">Agotado</span></li>'; }
  _offer_info += '<li>Usuario: <a class="text-dark">'+o_user+'</a></li></ul>';
  document.getElementById("offer-info").innerHTML +=_offer_info;

  document.getElementById("offer-sidebar").innerHTML += '<div class="product__prices">'+o_price+'</div><form class="product__options"><div class="form-group product__option"><div class="product__actions"><div class="product__actions-item product__actions-item--addtocart"><div class="d-grid gap-2"><a href="'+o_ref+'" target="_blank" class="btn btn-success btn-lg text-white">Ir al chollo</a></div></div></div></div></form>'


  document.getElementById("offer-footer").innerHTML += '<div class="product__tags tags"><div class="tags__list"><a href="index.html?c_id='+c_id+'">'+c_name+'</a></div></div>';
  document.getElementById("offer-footer").innerHTML += '<div class="product__share-links share-links"><ul class="share-links__list"><li class="share-links__item share-links__item--type--like"><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.criptochollos.com/oferta.html?o_id='+o_id+'&u='+o_url+'"><i class="fab fa-facebook-f"></i>  Compartir</a></li><li class="share-links__item share-links__item--type--tweet"><a href="https://twitter.com/intent/tweet?url=https://www.criptochollos.com/oferta.html?o_id='+o_id+'&u='+o_url+'"><i class="fab fa-twitter"></i>  Comparte</a></li><li class="share-links__item share-links__item--type--wapp"><a href="whatsapp://send?text=https://www.criptochollos.com/oferta.html?o_id='+o_id+'&u='+o_url+'" data-action="share/whatsapp/share"><i class="fab fa-whatsapp"></i>  Compartir</a></li></ul></div>';
}

function contact(c_message){
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  r_contact=fetch("https://5mus0rdlc0.execute-api.eu-west-3.amazonaws.com/default/criptochollos_contact?"+c_message, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  return r_contact
}