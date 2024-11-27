export const inputFields = [
    {
        type: 'input',
        labelKey: 'Project Name',
        name: 'name',
        isRequired: true
    },
    {
        type: 'input',
        labelKey: 'FIO',
        name: 'fio',
        isRequired: true
    },
    {
        type: 'input',
        labelKey: 'Purpose and Description of Request (Project)',
        name: 'description',
        isMultiLine: true,
        isRequired: true,
    },
    {
        type: 'select',
        labelKey: 'Request Direction (Project)',
        name: 'directionID',
        isRequired: true,
    },
    {
        type: 'input',
        labelKey: 'Budget',
        name: 'budget',
    },
    {
        type: 'file',
        labelKey: 'Technical Task',
        name: 'projectFiles',
        isRequired: true,
    },
    {
        type: 'input',
        labelKey: "Responsible Person's Full Name from Customer",
        name: 'company',
        isRequired: true,
    },
    {
        type: 'input',
        labelKey: 'Contact Details of Responsible Person from Customer',
        name: 'contact',
    },
    {
        type: 'input',
        labelKey: 'Note',
        name: 'notes',
        isMultiLine: true,
    },
];
