module.exports = {
    manager: [{
            name: "name",
            type: "input",
            message: "What is the manager's name (please enter first and last)?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the manager's ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the manager's email address?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the manager's office number?",
        },
    ],

    engineer: [{
            name: "name",
            type: "input",
            message: "What is the engineer's name (please enter first and last)?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the engineer's ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the engineer's email address?",
        },
        {
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?",
        },
    ],

    intern: [{
            name: "name",
            type: "input",
            message: "What is the intern's name (please enter first and last)?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the intern's ID?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the intern's email address?",
        },
        {
            name: "school",
            type: "input",
            message: "What school does the intern attend?",
        },
    ],

    select: [{
        name: "choice",
        type: "list",
        message: "Would you like to add a new employee?",
        choices: ['Yes, add Engineer', 'Yes, add Intern', 'No thanks!'],
    }],
};