;( function ( document, window, index )
{
  var s = document.body || document.documentElement, s = s.style, prefixAnimation = '';

  if( s.WebkitAnimation == '' ) prefixAnimation  = '-webkit-';
  if( s.MozAnimation == '' )    prefixAnimation  = '-moz-';
  if( s.OAnimation == '' )    prefixAnimation  = '-o-';

  Object.prototype.onCSSAnimationEnd = function( callback )
  {
    this.addEventListener( 'webkitAnimationEnd', callback );
    this.addEventListener( 'mozAnimationEnd', callback );
    this.addEventListener( 'oAnimationEnd', callback );
    this.addEventListener( 'oanimationend', callback );
    this.addEventListener( 'animationend', callback );
    if( ( prefixAnimation == '' && !( 'animation' in s ) ) || getComputedStyle( this )[ prefixAnimation + 'animation-duration' ] == '0s' ) callback();
    return this;
  };

}( document, window, 0 ));