/* sorry */
window.cookieconsent_options = {
    "message": "Taste our delicious cookies! They help us serve you more deliciously.",
    "dismiss": "Got it",
    "learnMore": "Get more tasty info here.",
    "link": "https://www.google.com/policies/technologies/cookies/",
    "theme": "dark-bottom",
    "markup": [
        '<div class="cc_banner-wrapper {{containerClasses}}">',
        '<div class="cc_banner cc_container cc_container--open">',
        '<a href="#null" data-cc-event="click:dismiss" target="_blank" class="cc_btn cc_btn_accept_all">{{options.dismiss}}</a>',
        '<p class="cc_message">{{options.message}} <a target="_blank" data-cc-if="options.link" class="cc_more_info" href="{{options.link || "#null"}}">{{options.learnMore}}</a></p>',
        '</div>',
        '</div>'
    ]
};