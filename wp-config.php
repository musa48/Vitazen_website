<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'snovv_db_dev' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(iO0EQyUe>N=q&g0`4bZ!;DeE.~[QQ D[*ka@PxQ8/9gV>Vv#k$T@~,M6gW]([uX' );
define( 'SECURE_AUTH_KEY',  'uU!)xfPzJ33}.:m);Rz(a.bStAf?OO8|;I$o-Y=dOT]r [6nh!<`K+GQ(ADW`bCa' );
define( 'LOGGED_IN_KEY',    '-r1w0?a1VY~NqLlIRq9IpoTJ=?Z@:{MS7cI%=m5M>+UB{6!h}!0^grLBQ%n|lho:' );
define( 'NONCE_KEY',        '-4&05F[J/PgraPqNAk$[&x5e-?s#ud_#AHGy,JTKGl(,BVt-F*t:lS3WmO/ID|bq' );
define( 'AUTH_SALT',        'rZOTO$}C{wnq) .&E]P$_C :x{MY*UpDCl(,`FY[U8OSn#a9)?.$?yTU1}&<qgSb' );
define( 'SECURE_AUTH_SALT', ']]C=c5hMe?4jtx2/$`Z(lm<LuIkrG~2:/Sulf5UIl>F4 y;|RL$S:KDeGhorNm)&' );
define( 'LOGGED_IN_SALT',   '71DD;MKMIHz=i^}[SES6y[aJqDjwa-kPqx2`F=PJ&ie%xHSsXP6PV|n@W@%4oPgM' );
define( 'NONCE_SALT',       '-Fyctw>;+tdY^tA&=9,~}$>MbAMc p7SjK$J]Wl-dL?&=(vYX/Y3f/0@KE4>V;hd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
