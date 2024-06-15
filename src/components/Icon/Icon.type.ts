import { Color, Size } from '@naturacosmeticos/natds-themes'
export type IconSize = keyof Size
export type IconColor = keyof Color

export interface IconsType {
    'filled-action-add': string;
    'filled-action-cancel': string;
    'filled-action-check': string;
    'filled-action-clock': string;
    'filled-action-delete': string;
    'filled-action-dislike': string;
    'filled-action-half-rating': string;
    'filled-action-increase': string;
    'filled-action-love': string;
    'filled-action-newrequest': string;
    'filled-action-privacy': string;
    'filled-action-rating': string;
    'filled-action-register': string;
    'filled-action-request': string;
    'filled-action-subtract': string;
    'filled-action-zoomin': string;
    'filled-action-zoomout': string;
    'filled-alert-cancel': string;
    'filled-alert-check': string;
    'filled-alert-empty': string;
    'filled-alert-indeterminate': string;
    'filled-alert-info': string;
    'filled-alert-notification': string;
    'filled-alert-notificationbadge': string;
    'filled-alert-notificationunavailable': string;
    'filled-alert-warning': string;
    'filled-brand-avonshorthand': string;
    'filled-brand-facebook': string;
    'filled-brand-google': string;
    'filled-brand-instagram': string;
    'filled-brand-linkedin': string;
    'filled-brand-messenger': string;
    'filled-brand-naturarosacea': string;
    'filled-brand-pinterest': string;
    'filled-brand-spotify': string;
    'filled-brand-thebodyshop': string;
    'filled-brand-tiktok': string;
    'filled-brand-twitter': string;
    'filled-brand-whatsapp': string;
    'filled-brand-x': string;
    'filled-brand-youtube': string;
    'filled-communication-digital-service': string;
    'filled-communication-noconnection': string;
    'filled-content-channel': string;
    'filled-content-divulgation': string;
    'filled-content-gauge': string;
    'filled-content-handsoap': string;
    'filled-content-handwater': string;
    'filled-content-oil': string;
    'filled-content-oilunavailable': string;
    'filled-content-quote': string;
    'filled-content-sensitive': string;
    'filled-content-violence': string;
    'filled-content-wifi': string;
    'filled-content-world': string;
    'filled-default-mockup': string;
    'filled-finance-bag': string;
    'filled-finance-bagcheck': string;
    'filled-finance-charging': string;
    'filled-finance-invoice': string;
    'filled-finance-money': string;
    'filled-finance-paymentlink': string;
    'filled-finance-paymentnotapproved': string;
    'filled-finance-pix': string;
    'filled-finance-shield': string;
    'filled-finance-shieldcheck': string;
    'filled-finance-shieldplus': string;
    'filled-media-pause': string;
    'filled-media-play': string;
    'filled-media-stop': string;
    'filled-media-volumeoff': string;
    'filled-media-volumeon': string;
    'filled-navigation-arrowbottom': string;
    'filled-navigation-arrowctrlcompactbottom': string;
    'filled-navigation-arrowctrlcompactleft': string;
    'filled-navigation-arrowctrlcompactright': string;
    'filled-navigation-arrowctrlcompacttop': string;
    'filled-navigation-arrowctrlregularbottom': string;
    'filled-navigation-arrowctrlregularleft': string;
    'filled-navigation-arrowctrlregularright': string;
    'filled-navigation-arrowctrlregulartop': string;
    'filled-navigation-arrowleft': string;
    'filled-navigation-arrowright': string;
    'filled-navigation-arrowrunbottom': string;
    'filled-navigation-arrowrunleft': string;
    'filled-navigation-arrowrunright': string;
    'filled-navigation-arrowruntop': string;
    'filled-navigation-arrowtop': string;
    'filled-navigation-arrowtrianglebottom': string;
    'filled-navigation-arrowtriangleleft': string;
    'filled-navigation-arrowtriangleright': string;
    'filled-navigation-arrowtriangletop': string;
    'filled-navigation-directionleft': string;
    'filled-navigation-directionright': string;
    'filled-navigation-directiontbottom': string;
    'filled-navigation-directiontop': string;
    'filled-navigation-home': string;
    'filled-navigation-maximize': string;
    'filled-navigation-menu': string;
    'filled-navigation-minimize': string;
    'filled-navigation-more': string;
    'filled-navigation-setbottom': string;
    'filled-navigation-setleft': string;
    'filled-navigation-setright': string;
    'filled-navigation-settop': string;
    'filled-place-local': string;
    'filled-place-target': string;
    'filled-place-truck': string;
    'filled-product-brandsproduct': string;
    'filled-product-cube': string;
    'filled-product-fashion': string;
    'filled-product-nailpolish': string;
    'filled-social-myprofile': string;
    'filled-toggle-indeterminatecheckbox': string;
    'fillled-action-indeterminatecheckbox': string;
    'outlined-action-add': string;
    'outlined-action-addproduct': string;
    'outlined-action-attachment': string;
    'outlined-action-autofilter': string;
    'outlined-action-calendar': string;
    'outlined-action-camerachange': string;
    'outlined-action-cancel': string;
    'outlined-action-change': string;
    'outlined-action-check': string;
    'outlined-action-clock': string;
    'outlined-action-closedbox': string;
    'outlined-action-copy': string;
    'outlined-action-copylink': string;
    'outlined-action-cycle': string;
    'outlined-action-delete': string;
    'outlined-action-dislike': string;
    'outlined-action-done': string;
    'outlined-action-download': string;
    'outlined-action-edit': string;
    'outlined-action-favorite': string;
    'outlined-action-filter': string;
    'outlined-action-frame': string;
    'outlined-action-gridsquare': string;
    'outlined-action-half-rating': string;
    'outlined-action-help': string;
    'outlined-action-history': string;
    'outlined-action-increase': string;
    'outlined-action-lightoff': string;
    'outlined-action-lighton': string;
    'outlined-action-like': string;
    'outlined-action-list': string;
    'outlined-action-love': string;
    'outlined-action-mic': string;
    'outlined-action-micrec': string;
    'outlined-action-newregister': string;
    'outlined-action-newrequest': string;
    'outlined-action-order': string;
    'outlined-action-phone': string;
    'outlined-action-print': string;
    'outlined-action-privacy': string;
    'outlined-action-qr': string;
    'outlined-action-rating': string;
    'outlined-action-recycle': string;
    'outlined-action-register': string;
    'outlined-action-request': string;
    'outlined-action-requestspecial': string;
    'outlined-action-runningclock': string;
    'outlined-action-save': string;
    'outlined-action-schedule': string;
    'outlined-action-search': string;
    'outlined-action-selectedalllines': string;
    'outlined-action-send': string;
    'outlined-action-settings': string;
    'outlined-action-share': string;
    'outlined-action-shareios': string;
    'outlined-action-subtract': string;
    'outlined-action-text': string;
    'outlined-action-update': string;
    'outlined-action-upload': string;
    'outlined-action-visibility': string;
    'outlined-action-visibilityoff': string;
    'outlined-action-visibilitysleeping': string;
    'outlined-action-zoomin': string;
    'outlined-action-zoomout': string;
    'outlined-alert-cancel': string;
    'outlined-alert-check': string;
    'outlined-alert-empty': string;
    'outlined-alert-indeterminate': string;
    'outlined-alert-info': string;
    'outlined-alert-notification': string;
    'outlined-alert-notificationsbadge': string;
    'outlined-alert-notificationunavailable': string;
    'outlined-alert-warning': string;
    'outlined-avon-desenvolve': string;
    'outlined-bag-emptybag': string;
    'outlined-brand-avondesenvolve': string;
    'outlined-brand-avonshorthand': string;
    'outlined-brand-messenger': string;
    'outlined-brand-thebodyshop': string;
    'outlined-brand-tiktok': string;
    'outlined-brand-x': string;
    'outlined-communication-chat': string;
    'outlined-communication-digital-service': string;
    'outlined-communication-email': string;
    'outlined-communication-help': string;
    'outlined-communication-message': string;
    'outlined-communication-noconnection': string;
    'outlined-communication-occurrence': string;
    'outlined-communication-phoneringing': string;
    'outlined-communication-readEmail': string;
    'outlined-communication-signal': string;
    'outlined-communication-speaker': string;
    'outlined-communication-treatment': string;
    'outlined-content-adddocument': string;
    'outlined-content-agility': string;
    'outlined-content-asleep': string;
    'outlined-content-bellringing': string;
    'outlined-content-book': string;
    'outlined-content-brightness': string;
    'outlined-content-changeview': string;
    'outlined-content-channel': string;
    'outlined-content-christmascard': string;
    'outlined-content-cloud': string;
    'outlined-content-consistency': string;
    'outlined-content-divulgation': string;
    'outlined-content-education': string;
    'outlined-content-emptybag': string;
    'outlined-content-exchangereports': string;
    'outlined-content-flower': string;
    'outlined-content-fragrance': string;
    'outlined-content-gallery': string;
    'outlined-content-gauge': string;
    'outlined-content-gift': string;
    'outlined-content-global': string;
    'outlined-content-handbag': string;
    'outlined-content-handcare': string;
    'outlined-content-handglobal': string;
    'outlined-content-hands': string;
    'outlined-content-handsoap': string;
    'outlined-content-handwater': string;
    'outlined-content-health': string;
    'outlined-content-healthy': string;
    'outlined-content-indicator': string;
    'outlined-content-itemlist': string;
    'outlined-content-leafs': string;
    'outlined-content-lifebuoy': string;
    'outlined-content-lock': string;
    'outlined-content-magic': string;
    'outlined-content-maintenance': string;
    'outlined-content-medal': string;
    'outlined-content-menu': string;
    'outlined-content-mirror': string;
    'outlined-content-oil': string;
    'outlined-content-oilunavailable': string;
    'outlined-content-password': string;
    'outlined-content-planb': string;
    'outlined-content-productshowcase': string;
    'outlined-content-produtivity': string;
    'outlined-content-rainycloud': string;
    'outlined-content-report': string;
    'outlined-content-saleinsight': string;
    'outlined-content-sensitive': string;
    'outlined-content-snow': string;
    'outlined-content-store': string;
    'outlined-content-sun': string;
    'outlined-content-sunandcloud': string;
    'outlined-content-unavailable': string;
    'outlined-content-violence': string;
    'outlined-content-virtualmirror': string;
    'outlined-content-wellness': string;
    'outlined-content-wifi': string;
    'outlined-content-world': string;
    'outlined-default-mockup': string;
    'outlined-finance-addbag': string;
    'outlined-finance-bag': string;
    'outlined-finance-bagcheck': string;
    'outlined-finance-bank': string;
    'outlined-finance-cards': string;
    'outlined-finance-charging': string;
    'outlined-finance-creditcard': string;
    'outlined-finance-debit': string;
    'outlined-finance-discount': string;
    'outlined-finance-idcard': string;
    'outlined-finance-invoice': string;
    'outlined-finance-littlemachine': string;
    'outlined-finance-money': string;
    'outlined-finance-moneypaper': string;
    'outlined-finance-paid': string;
    'outlined-finance-paymentlink': string;
    'outlined-finance-paymentnotapproved': string;
    'outlined-finance-payreference': string;
    'outlined-finance-pix': string;
    'outlined-finance-promotion': string;
    'outlined-finance-scancard': string;
    'outlined-finance-shield': string;
    'outlined-finance-shieldcheck': string;
    'outlined-finance-shieldplus': string;
    'outlined-finance-shoppingcart': string;
    'outlined-finance-shoppingcartproduct': string;
    'outlined-finance-suitcase': string;
    'outlined-finance-tagdiscount': string;
    'outlined-finance-transfermoney': string;
    'outlined-makeup-age': string;
    'outlined-makeup-eyebrow': string;
    'outlined-makeup-eyelashes': string;
    'outlined-makeup-eyeliner': string;
    'outlined-makeup-face': string;
    'outlined-makeup-mixedskin': string;
    'outlined-makeup-mouth': string;
    'outlined-makeup-typeacneic': string;
    'outlined-media-app': string;
    'outlined-media-camera': string;
    'outlined-media-cameraunavailable': string;
    'outlined-media-monitor': string;
    'outlined-media-play': string;
    'outlined-media-volumeoff': string;
    'outlined-media-volumeon': string;
    'outlined-navigation-arrowbottom': string;
    'outlined-navigation-arrowctrlcompactbottom': string;
    'outlined-navigation-arrowctrlcompactleft': string;
    'outlined-navigation-arrowctrlcompactright': string;
    'outlined-navigation-arrowctrlcompacttop': string;
    'outlined-navigation-arrowctrlregularbottom': string;
    'outlined-navigation-arrowctrlregularleft': string;
    'outlined-navigation-arrowctrlregularright': string;
    'outlined-navigation-arrowctrlregulartop': string;
    'outlined-navigation-arrowleft': string;
    'outlined-navigation-arrowleft-alt': string;
    'outlined-navigation-arrowright': string;
    'outlined-navigation-arrowright-alt': string;
    'outlined-navigation-arrowrunbottom': string;
    'outlined-navigation-arrowrunleft': string;
    'outlined-navigation-arrowrunright': string;
    'outlined-navigation-arrowruntop': string;
    'outlined-navigation-arrowtop': string;
    'outlined-navigation-close': string;
    'outlined-navigation-directionbottom': string;
    'outlined-navigation-directionleft': string;
    'outlined-navigation-directionleft-alt': string;
    'outlined-navigation-directionright': string;
    'outlined-navigation-directionright-alt': string;
    'outlined-navigation-directiontop': string;
    'outlined-navigation-exit': string;
    'outlined-navigation-goback': string;
    'outlined-navigation-gofront': string;
    'outlined-navigation-home': string;
    'outlined-navigation-maximize': string;
    'outlined-navigation-menu': string;
    'outlined-navigation-minimize': string;
    'outlined-place-bus': string;
    'outlined-place-forklift': string;
    'outlined-place-gps': string;
    'outlined-place-local': string;
    'outlined-place-rocket': string;
    'outlined-place-runningtruck': string;
    'outlined-place-target': string;
    'outlined-place-truck': string;
    'outlined-place-waze': string;
    'outlined-product-abandonedbag': string;
    'outlined-product-accessories': string;
    'outlined-product-bagproduct': string;
    'outlined-product-beard': string;
    'outlined-product-brandsproduct': string;
    'outlined-product-childish': string;
    'outlined-product-cube': string;
    'outlined-product-dailycare': string;
    'outlined-product-ekos': string;
    'outlined-product-erlenmeyer': string;
    'outlined-product-face': string;
    'outlined-product-fashion': string;
    'outlined-product-hair': string;
    'outlined-product-lashes': string;
    'outlined-product-liner': string;
    'outlined-product-lipgloss': string;
    'outlined-product-makeup': string;
    'outlined-product-nailpolish': string;
    'outlined-product-outlet': string;
    'outlined-product-pencil': string;
    'outlined-product-perfumery': string;
    'outlined-product-perfumeryfeminine': string;
    'outlined-product-perfumerymasculine': string;
    'outlined-product-perfumerytbs': string;
    'outlined-product-powder': string;
    'outlined-product-primer': string;
    'outlined-product-promotionproduct': string;
    'outlined-product-relatedproducts': string;
    'outlined-product-repurchase': string;
    'outlined-product-scent': string;
    'outlined-product-vegan': string;
    'outlined-social-addcontact': string;
    'outlined-social-birthday': string;
    'outlined-social-collaborate': string;
    'outlined-social-contact': string;
    'outlined-social-digitalconsultant': string;
    'outlined-social-groupofpeople': string;
    'outlined-social-management': string;
    'outlined-social-myprofile': string;
    'outlined-social-network': string;
    'outlined-social-person': string;
  }
