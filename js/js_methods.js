function add_nav_category_001(id, name, url) {
  document.getElementById("nav_categories_001").innerHTML += '<li class="nav-links__item "><a class="nav-links__item-link" href="#"><div class="nav-links__item-body">' + name + '</div></a></li>';
}

function add_select_category_002(id, name, url) {
  document.getElementById("select_categories_002").innerHTML += '<option value="'+id+'">' + name + '</option>';
}

function add_ul_category_003(id, name, url) {
  document.getElementById("ul_categories_003").innerHTML += '<li class="departments__item"><a class="departments__item-link" href="">' + name + '</a></li>';
}

function add_ul_category_004(id, name, url) {
  document.getElementById("ul_categories_004").innerHTML += '<li class="filter-categories__item filter-categories__item--child"><a href="">' + name + '</a><div class="filter-categories__counter">-</div></li>';
}

function add_article_card(id, name, category_id, intro_description, date, score, status, image, price) {
  _article_card='<div class="product-card product-card--hidden-actions "><div class="product-card__image product-image"><a href="chollo.html?id='+id+'" class="product-image__body"><img class="product-image__img" src="' + image + '" alt=""></a></div><div class="product-card__info"><div class="product-card__name"><a href="product.html">' + name + '</a></div><div class="product-card__rating"><div class="product-card__rating-stars"><div class="rating"><div class="rating__body">';
  
  for (i = 1; i <= 5; i++) {
    if(i <= score){
      _article_card += '<svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div>';
    }
    else{
      _article_card += '<svg class="rating__star " width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge "><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div></div></div></div>'
    }
  }

  _article_card += '<div class="product-card__rating-legend">'+score+'</div></div><p class="product-card__features-list">' + intro_description + '</p></div><div class="product-card__actions"><div class="product-card__availability">Estado: ';

  if(status==1){_article_card += '<span class="text-success">Disponible';}else{_article_card += '<span class="text-danger">Agotado';}
  _article_card += '</span></div><div class="product-card__prices">' + price + '</div><div class="product-card__buttons"><a class="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button" href="chollo.html?id='+id+'">Ir al chollo</a></div></div></div>';
  
  document.getElementById("_article_card_list").innerHTML += _article_card 
}
