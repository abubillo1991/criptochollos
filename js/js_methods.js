function add_nav_category_001(id, name, url) {
  document.getElementById("nav_categories_001").innerHTML += '<li class="nav-links__item "><a class="nav-links__item-link" href="#"><div class="nav-links__item-body">' + name + '</div></a></li>';
}

function add_select_category_002(name) {
  document.getElementById("select_categories_002").innerHTML += '<option value="'+id+'">' + name + '</option>';
}

function add_product_card(name, intro_description, image, price) {
  document.getElementById("_article_list").innerHTML += '<div class="product-card product-card--hidden-actions "><button class="product-card__quickview" type="button"><svg width="16px" height="16px"><use xlink:href="images/sprite.svg#quickview-16"></use></svg><span class="fake-svg-icon"></span></button><div class="product-card__image product-image"><a href="product.html" class="product-image__body"><img class="product-image__img" src="' + image + '" alt=""></a></div><div class="product-card__info"><div class="product-card__name"><a href="product.html">' + name + '</a></div><div class="product-card__rating"><div class="product-card__rating-stars"><div class="rating"><div class="rating__body"><svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div><svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div><svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div><svg class="rating__star rating__star--active" width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge rating__star--active"><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div><svg class="rating__star " width="13px" height="12px"><g class="rating__fill"><use xlink:href="images/sprite.svg#star-normal"></use></g><g class="rating__stroke"><use xlink:href="images/sprite.svg#star-normal-stroke"></use></g></svg><div class="rating__star rating__star--only-edge "><div class="rating__fill"><div class="fake-svg-icon"></div></div><div class="rating__stroke"><div class="fake-svg-icon"></div></div></div></div></div></div><div class="product-card__rating-legend">9 Reviews</div></div><p class="product-card__features-list">' + intro_description + '</p></div><div class="product-card__actions"><div class="product-card__availability">Availability: <span class="text-success">In Stock</span></div><div class="product-card__prices">' + price + '</div><div class="product-card__buttons"><button class="btn btn-primary product-card__addtocart" type="button">Add To Cart1</button><button class="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Ir al chollo</button><button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px"><use xlink:href="images/sprite.svg#wishlist-16"></use></svg><span class="fake-svg-icon fake-svg-icon--wishlist-16"></span></button><button class="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px"><use xlink:href="images/sprite.svg#compare-16"></use></svg><span class="fake-svg-icon fake-svg-icon--compare-16"></span></button></div></div></div>';
}
