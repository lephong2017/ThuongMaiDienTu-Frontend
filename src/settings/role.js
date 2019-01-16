export const ADD = "ADD";
export const READ = "READ";
export const DELETE = "DELETE";
export const EDIT = "EDIT";


export const MANAGER_ROLE = [
    {
        module: "PARTNER",
        role : [READ]
    },

    {
        module: "CAR",
        role : [READ]
    },
];

export const findRoleManager = (moduleName) => {
    return MANAGER_ROLE.map((val, ind)=>{
        if(val.module === moduleName){
            return val.role;
        }
    })
}

