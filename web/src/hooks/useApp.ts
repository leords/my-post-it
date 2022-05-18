
export const useApp = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: '3', name: 'José', email: 'jose@gmail.com' }
        };
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: '3', name: 'José', email: 'jose@gmail.com'},
            token: '123456789'
        };
        
    },
    logout: async () => {
        return { status: true };
    }
});