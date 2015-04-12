var basic = require('../functions/basic.js');
var consoleLogger = require('../functions/basic.js').consoleLogger;

var receivedLogger = function (module) {
    var rL = require('../functions/basic.js').receivedLogger;
    rL('basic_api', module);
};

var successLogger = function (module, text) {
    var sL = require('../functions/basic.js').successLogger;
    return sL('basic_api', module, text);
};
var errorLogger = function (module, text, err) {
    var eL = require('../functions/basic.js').errorLogger;
    return eL('basic_api', module, text, err);
};

function getTheUser(req) {
    return req.customData.theUser;
}

module.exports = {
    getFeaturedImages: function (req, res) {
        res.status(200).send({
            featuredImages: [
                {
                    componentUniqueCuid: 'fjsdfhjbsdbf',
                    caption: 'MAC COMFORT',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lfill,h_500,w_1920/v1428763093/mac_comfort_eulcso.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbssdfdfeyhjdbf',
                    caption: 'COOP STREET',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lfill,h_500,w_1920/v1428767223/coop_street_khwwlo.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfkwehjwekpofhjbsdbf',
                    caption: 'COOP INSIDE',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lfill,h_500,w_1920/v1428767223/coop_inside_wg1cez.jpg'
                }
            ]
        });
    },

    getHotThisWeek: function (req, res) {
        res.status(200).send({
            hotThisWeek: [
                {
                    componentUniqueCuid: 'fjsdfhjbsdbfjhfsdbjfsdhfb',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/8546.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdb856237890f',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/l_8542.jpg'
                },
                {
                    componentUniqueCuid: 'fjsiyt67ruygwehixnuwye8rdbf',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/8548.jpg'
                },
                {
                    componentUniqueCuid: 'fjsd0394u8yjkdnsjhgbffhjbsdbf',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/8546.jpg'
                },
                {
                    componentUniqueCuid: 'fjs09090900dfhjbsdbf',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/l_8542.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdknxv23456239502bf',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/8548.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/8546.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348aaaaaaaaaa',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/l_8542.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348000000000000000',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428770996/hotThisWeek/8548.jpg'
                }
            ]
        });
    },

    getPromotions: function (req, res) {
        res.status(200).send({
            promotions: [
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348111111111111111',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_300,w_700/v1428802581/10percent_k58eve.gif'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh09485792034822222222222222',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_300,w_700/v1428801437/home_slider_5_fadrfg.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203483333333333333333',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_300,w_700/v1428801437/coop_director_b3ogpx.jpg'
                }
            ]
        });
    },

    getInspiredItems: function (req, res) {
        res.status(200).send({
            inspiredItems: [
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203484444444444444444',
                    caption: 'Short',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817023/inspired/l_1662.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348555555555555555555',
                    caption: 'Training Top',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817023/inspired/l_1665.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203486666666666666666666',
                    caption: 'Training Top',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817023/inspired/l_1669.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203487777777777777777777',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817023/inspired/l_1994.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh09485792034888888888888888888',
                    caption: 'Training Short',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817023/inspired/l_3211.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203489999999999999999999',
                    caption: 'Training Suit',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,w_200/v1428817023/inspired/l_3801.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203481212121212121212',
                    caption: 'Sweatshirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,w_200/v1428817024/inspired/l_4448.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348232323232323232323',
                    caption: 'Sweatshirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,w_200/v1428817024/inspired/l_4477.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh09485792034834343434343434343434',
                    caption: 'Frame',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817024/inspired/l_4621.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203484545454554545454545',
                    caption: 'Watch',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lfill,h_200,w_200/v1428817024/inspired/l_4642.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203485656566565656565656',
                    caption: 'Cufflinks',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817024/inspired/l_4782.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203486767676767676767676',
                    caption: 'Cufflinks',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817024/inspired/l_4784.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203487878787878787878',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428817024/inspired/l_6450.jpg'
                }
            ]
        });
    },

    getRelatedToRecentlyViewed: function (req, res) {
        res.status(200).send({
            relatedToRecentlyViewed: [
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348898989898989898',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428820567/recent_viewed/l_6253.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0948579203480909090909090909',
                    caption: 'Chair',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lfill,h_200,w_200/v1428820567/recent_viewed/l_1200.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348938475682900230202002',
                    caption: 'Training Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428820566/recent_viewed/l_1756.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348hahahahahahaha',
                    caption: 'Desk Watch',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_fill,h_200,w_200/v1428820567/recent_viewed/l_2219.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348hahahahahahaha903847',
                    caption: 'Cap',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428820566/recent_viewed/l_2356.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348hahahahahahahahhhhhhqqqlo',
                    caption: 'Hooded Sweatshirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428820567/recent_viewed/l_2436.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdb000osmmcpahhhhhhqqqlo',
                    caption: 'Cap',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,w_200/v1428820567/recent_viewed/l_3391.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348hahahahahahahasdfs92384792392',
                    caption: 'Cap',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,w_200/v1428820567/recent_viewed/l_3397.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh094857920348hahahahahahaha888838388838',
                    caption: 'Sweatshirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,w_200/v1428820567/recent_viewed/l_3690.jpg'
                },
                {
                    componentUniqueCuid: '1213123981239898fjsdfhjbsdbffsdfh094857920348hahahahahahaha',
                    caption: 'T-Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428820567/recent_viewed/l_3695.jpg'
                },
                {
                    componentUniqueCuid: '3465785432fjsdfhjbsdbffsdfh094857920348hahahahahahaha',
                    caption: 'Key holders',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lpad,h_200,w_200/v1428820567/recent_viewed/l_4763.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhhahhahhahjbsdbffsdfh094857920348hahahahahahaha',
                    caption: 'Desk Lamp',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428820567/recent_viewed/l_5202.jpg'
                }
            ]
        });
    },

    getDiscover: function (req, res) {
        res.status(200).send({
            discover: [
                {
                    componentUniqueCuid: 'fjsdfhjbsd04837590hhd094857920348hahahahahahaha',
                    caption: "Athlete's choice",
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lpad,h_200,w_200/v1428822381/discover/harvard_athlete_promo.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjgfhjfdsdfghdgsfgdsflsknfh094857920348hahahahahahaha',
                    caption: 'Under armour',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428822381/discover/l_1749.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfhhahahajovin094857920348hahahahahahaha',
                    caption: 'Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428822381/discover/l_3381.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbffsdfh0023948y7290985y7hahaha',
                    caption: 'Shirt',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428822381/discover/l_3383.jpg'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsdbfmwilangafsdfh0023948y7290985y7hahaha',
                    caption: 'Training Top',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_lpad,h_200,w_200/v1428822381/discover/mit_athlete_promo.jpg'
                },
                {
                    componentUniqueCuid: 'fjsd9847638ndgschj23948y7290985y7hahaha',
                    caption: 'MIT T-shirt combo',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428822381/discover/Promo_Clearance_MIT_2014_1.gif'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsjbmco985y7hahaha',
                    caption: 'T-Shirts',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428822382/discover/Promo_harv_hasty_pudding_2015.gif'
                },
                {
                    componentUniqueCuid: 'fjsdfhjbsjbmco985y7hlololahaha',
                    caption: 'Harvard T-shirt combo',
                    price: 50,
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    src: 'http://res.cloudinary.com/jbm-co/image/upload/c_scale,h_200,w_200/v1428822382/discover/Promo_harv_tshirts_2014.gif'
                }
            ]
        });
    }
};