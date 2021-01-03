// Follow the JSON structure from REST API https://docs.parseplatform.org/rest/guide/#schema
import { CommonFields } from './common';

export const TeamSettings = {
    className: "TeamSettings",
	fields: Object.assign(
        {},
        CommonFields,
        {
            avatar: {
                type: 'File'
            },
            background: {
                type: 'File'
            },
            canPost: {
                type: 'String',
            },
            canComment: {
                type: 'String',
            },
            canLike: {
                type: 'String',
            },
            canCreatePicture: {
                type: 'String',
            },
            canCreatePoll: {
                type: 'String',
            },
            canCreateFaqEntry: {
                type: 'String',
            },
            canEditFaqEntry: {
                type: 'String',
            },
            socialLinks: {
                type: 'Array',
            },
            footerLinks: {
                type: 'Array',
            }
        }
    ),
    classLevelPermissions: {
        find: { },
        count: { },
        get: {
            '*': true
        },
        create: { },
        update: {
            requiresAuthentication: true
        },
        delete: {},
        addField: {},
        protectedFields: {}
    },
    indexes: { }
};

export const Team = {
    className: "Team",
	fields: Object.assign(
        {},
        CommonFields,
        {
            name: {
                type: "String",
                required: true
            },
            slug: {
                type: "String",
                required: true
            },
            settings: {
                type: "Pointer",
                targetClass: "TeamSettings",
                required: true,
            },
            leaders: {
                type: "Pointer",
                targetClass: "_Role",
                required: true
            },
            members: {
                type: "Pointer",
                targetClass: "_Role",
                required: true
            },
            mods: {
                type: "Pointer",
                targetClass: "_Role",
                required: true
            },
            agents: {
                type: "Pointer",
                targetClass: "_Role",
                required: true
            },
            publishers: {
                type: "Pointer",
                targetClass: "_Role",
                required: true
            },
            subOf: {
                type: "Pointer",
                targetClass: "Team",
                required: false
            },
        }
    ),
    classLevelPermissions: {
        find: {
            requiresAuthentication: true
        },
        count: {},
        get: {
            '*': true
        },
        create: {
            requiresAuthentication: true
        },
        update: {},
        delete: {},
        addField: {},
        protectedFields: {}
    },
    indexes: {
    }
}
