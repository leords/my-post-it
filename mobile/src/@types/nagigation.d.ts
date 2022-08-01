export declare global { //declaração global
    namespace ReactNavigation { 
        interface RootParamList {
            auth: undefined
            home: undefined
            register: {id: string, title: string}
            list: {id: string}
            project: {id: string}
            task: {id: string, nameTask: string, nameProject: string}
        }
    }
}