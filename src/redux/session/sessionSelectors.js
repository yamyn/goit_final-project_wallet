export const getIsAuthenticated = state => state.session.authenticated;

export const getToken = state => state.session.token;

export const getUser = state => state.session.user;

export const getReqUserData = state => {
    const { token, user } = state.session;
    const userId = user ? user.id : null;

    return {
        token,
        userId,
    };
};
