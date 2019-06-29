{**
 * 2007-2019 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2019 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
{if !$customer.is_logged}
<section class="hidden-sm-down landing-frame" style="height: 100vh;">
  <div class="landing-title">
    <h1>UNFABLED</h1>
  </div>
  <div class="landing-buttons-group">


    <div class="button-wrapper landing-button">
      <a href="#featured-products">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="button-wrapper__shape" height="60" width="280" rx="0" />
          </svg>
            <div class="button-wrapper__text">THE SHOP</div>
      </a>
    </div>

    <div class="button-wrapper landing-button">
      <a href="">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="button-wrapper__shape" height="60" width="280" rx="0" />
          </svg>
            <div class="button-wrapper__text">ABOUT US</div>
      </a>
    </div>




    {* <div class=landing-button>
      <a href="#featured-products"><h2>THE SHOP</h2></a>
    </div>
    <div class=landing-button>
      <h2>ABOUT US</h2>
    </div> *}


  </div>
  <div></div>
</section>

<div class="hidden-sm-down landing-frame-fix" style="height: 100vh;"></div>

{/if}

<section class="featured-products clearfix" id="featured-products">
  <h2 class="h2 products-section-title text-uppercase">
    {l s='Popular Products' d='Shop.Theme.Catalog'}
  </h2>
  <div class="products">
    {foreach from=$products item="product"}
      {include file="catalog/_partials/miniatures/product.tpl" product=$product}
    {/foreach}
  </div>
  <div class="all-product-link-container text-xs-center">
    <a class="all-product-link h4" href="{$allProductsLink}">
      {l s='All products' d='Shop.Theme.Catalog'}<i class="material-icons">&#xE315;</i>
    </a>
  </div>
</section>
