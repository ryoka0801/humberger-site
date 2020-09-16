// jQuery( function( $ ) {
// 	if(window.matchMedia("(max-width: 768px)").matches) {
		jQuery( function( $ ) {
			$( ".is-hamburger" ).on( "click", function() {
				$( this ).toggleClass( "is-open" );
				$( ".p-gmenu" ).toggleClass( "is-open" );
				$( "body" ).toggleClass( "is-open" ).toggleClass( "overflowhidden" );
				$( ".list" ).toggleClass( "is-open" );
				$( ".my-parts" ).toggleClass("gmenu-open");
				$( ".menu-bt" ).toggleClass( "gmenu-close" );
			} );
		} );
// 	}
// });

