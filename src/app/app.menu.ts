import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Home',
        icon: 'glyphicon-dashboard',
        route: 'authenticated/dashboard',
        submenu: null
    },
    {
        text: 'Exchange Rates',
        icon: 'glyphicon-eur',
        route: 'authenticated/rate',
        submenu: null
    },
    {
        text: 'Buy/Sell Currency',
        icon: 'glyphicon-transfer',
        route: null,
        submenu: [
            {
                text: 'Buy Currency',
                icon: 'glyphicon-import',
                route: 'authenticated/buy',
                submenu: null
            },
            {
                text: 'Sell Currency',
                icon: 'glyphicon-export',
                route: 'authenticated/sell',
                submenu: null
            }
        ]
    },

    {
        text: 'Help',
        icon: 'glyphicon-info-sign',
        route: null,
        submenu: [
            {
                text: 'User Guide',
                icon: 'glyphicon-th-list',
                route: 'authenticated/guide',
                submenu: null
            },
            {
                text: 'Faq',
                icon: 'glyphicon-question-sign',
                route: 'authenticated/faq',
                submenu: null
            }
        ]
    },

    {
        text: 'Contact Us',
        icon: 'glyphicon-envelope',
        route: 'authenticated/contact',
        submenu: null
    },
    {
        text: 'Advertise',
        icon: 'glyphicon-blackboard',
        route: 'authenticated/advertise',
        submenu: null
    },

    {
        text: 'Admin',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Currency Maint',
                icon: 'glyphicon-wrench',
                route: 'authenticated/cryptocurr-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'authenticated/settings',
                submenu: null
            }
        ]
    }
];
